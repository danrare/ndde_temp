const {readFileSync, writeFileSync} = require("fs");
// const fs = require("fs");

const file  = readFileSync("./content/sub-folder/test.txt");

const newFile = writeFileSync("./content/third.txt", "Welcome to node js", {flag: 'a'})

console.log(file.toString());
