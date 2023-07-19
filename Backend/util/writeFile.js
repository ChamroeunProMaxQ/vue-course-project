const fs = require("fs");


const writeFile = (data) => {
   const res = fs.writeFileSync("data.json", JSON.stringify(data));
   console.log(res)
}

module.exports = writeFile;