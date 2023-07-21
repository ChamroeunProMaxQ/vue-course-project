const fs = require("fs");
const readFile = require("../util/readFile");

const getAreas = async (req, res, next) => {

  try {
    //read data from data.json
    const dataJSON = readFile();
    const areas = dataJSON.areas;

    res.status(200).json(areas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAreaById = async (req, res, next) => {
    const areaId = req.params.id;
    try {
        //read data from data.json
        const dataJSON = readFile();
        const areas = dataJSON.areas;
        const area = areas.find(area => area.id === areaId);
        if(!area){
            const error = new Error('Could not find area');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json(area);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = {
  getAreas,
  getAreaById
};
