/* to use fs */
const fs = require("fs");

//fs.writeFileSync("notes.txt", "part 1: this file was by nodejs");
fs.appendFileSync("notes.txt", "\ncontinue with new texts");
