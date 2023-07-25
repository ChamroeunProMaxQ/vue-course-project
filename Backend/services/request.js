const readFile = require("../util/readFile");
const writeFile = require("../util/writeFile");

const getRequests = async (req, res) => {
    try {
    const data = readFile();
    const allRequests = data.requests;
    const requests = allRequests.filter(request => request.coachId == req.userId);
    res.status(200).json(requests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addRequest = async (req, res) => {
  const { email, message, coachId } = req.body;
  try {
    const data = readFile();
    const requests = data.requests;
    const id = "r".concat(parseInt(requests[requests.length - 1].id[1]) + 1);
    const newRequest = {
      id: id,
      email: email,
      message: message,
      coachId: coachId,
      reqBy : req.userId
    };
    requests.push(newRequest);
    data.requests = requests;
    writeFile(data);
    return res.status(201).json(newRequest);
  }catch(err){
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
    getRequests,
    addRequest
};
