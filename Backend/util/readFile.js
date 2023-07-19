const fs = require("fs");

const readFile = () => {
    const data = fs.readFileSync("data.json",'utf-8');
    const dataJSON = JSON.parse(data);
    return dataJSON;
}

module.exports = readFile;