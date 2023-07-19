const fs = require("fs");
const path = require("path");

const readFile = () => {
    const data = fs.readFileSync(path.resolve('data.json'),'utf-8');
    const dataJSON = JSON.parse(data);
    return dataJSON;
}

module.exports = readFile;