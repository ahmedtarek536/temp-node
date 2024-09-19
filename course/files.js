const { readFile, readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./first.txt", "utf8");
const second = readFileSync("./second.txt", "utf-8");

writeFileSync("./first.txt", " shut up", { flag: "a" });

readFile("./first.txt", "utf-8", (err, result) => {
  if (err) console.log(err);
  else console.log(result);
});




console.log(first);
console.log(second);
