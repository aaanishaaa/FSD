const fs=require('fs');
function write(){
    fs.writeFile("data.txt","Welcome to FSD",(err,data)=>{
        if(err) throw err
        console.log("File created successfully");
    })
    
}
function read(){
    fs.readFile("data.txt",(err,data)=>{
        if(err) throw err;
        console.log(data.toString());
    })
}
function append(){
    fs.appendFile("data.txt","hiii",(err)=>{
        if(err) throw err;
        console.log("data appended");
    })
}
function unlink(){
    fs.unlink("data.txt",(err)=>{
        if(err) throw err;
        console.log("file deleted");
    })
}
const obj={
    read,write,append,unlink
}
module.exports=obj