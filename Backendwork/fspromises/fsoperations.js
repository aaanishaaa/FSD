const fs=require('node:fs/promises');
// const fs=require('fs').promises;
const fspromise=fs.writeFile("data.txt","Helllo")
console.log(fspromise)
fspromise.then((data)=>{    
    console.log("data written")
}).catch((err)=>{
    console.log("error")
}).finally(()=>{
    console.log("finally")
})