const fs = require("fs");
function datawrite() {
  try {
    fs.writeFileSync("data.txt", "yabadadoo");
    console.log("data written")
  } catch (err) {
    console.log(err);
  }
}
function readfile() {
  try {
    const rs = fs.readFileSync("data.txt", { encoding: "utf-8" });
    console.log("data read")
  } catch (err) {
    console.log(err);
  }
}
function append() {
  try {
    fs.appendFileSync("data.txt", "hiiii");
    console.log("data appended")
  } catch (err) {
    console.log(err);
  }
}
function unlink(){
    try{
        fs.unlinkSync("data.txt");
        console.log("file deleted")
    }
    catch(err){console.log(err);
    }
}
const obj = {
  datawrite,
  readfile,
  unlink,
  append
};
module.exports = obj;
