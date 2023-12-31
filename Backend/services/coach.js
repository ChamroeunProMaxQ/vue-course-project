const readFile = require("../util/readFile");
const writeFile = require("../util/writeFile");

const getCoach = async (req, res) => {
  try {
    const data = readFile();
    const coaches = data.coaches;
    res.status(200).json(coaches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCoachById = async (req, res) => {
    try {
        const coachId = req.params.id;
        const data = readFile();
        const coach = data.coaches.find(coach => coach.id === coachId);
        if(!coach){
            const error = new Error('Could not find coach');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json(coach);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
}

const registerCoach = async (req, res) => {
    const {name , areas, price} = req.body;
    try { 
        const data = readFile(); 
        const coaches = data.coaches;
        // const id = 'c'.concat(parseInt(coaches[coaches.length - 1].id[1])+1);
        const newCoach = { 
            id : req.userId,
            name: name,
            areas: areas,
            price: price
        };
        coaches.push(newCoach);
        data.coaches = coaches;
        writeFile(data);
        return res.status(201).json(newCoach);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
}


module.exports = {
    getCoach,
    getCoachById,
    registerCoach,
};
