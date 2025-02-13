const { promises } = require('node:dns');
const fs=require('node:fs/promises');
const fspromise=fs.writeFile("data.txt","Helllo")
console.log(fspromise)
fspromise.then((data)=>{    
    console.log("data written")
}).catch((err)=>{
    console.log("error")
}).finally(()=>{
    console.log("finally")
})
// ASYNC AWAIT
async function readfileAsync(){
    const data=await fs.readFile('data.txt','utf-8');
    console.log(data);
}
readfileAsync();