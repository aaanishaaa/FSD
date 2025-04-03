const http=require('http');   //http made
const fs=require('fs').promises;   //promise made
const PORT=3005    //Port is defined
const server=http.createServer((req,res)=>{      
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    if(req.method=="OPTIONS"){
        res.statusCode=200;
        return res.end();
    }

    if(req.url=="/register" && req.method=="POST"){
        let body='';
        let arr=[];

        req.on('data',chunk=>{
            body+=chunk;
        })

        req.on('end',async()=>{
          const {name,email,password}=JSON.parse(body);
          console.log("Name="+name);
                const data1=await fs.readFile('student.json',{encoding:'utf-8'});
                arr=JSON.parse(data1);
                console.log("data from file:")
                console.log(arr);
                const result=arr.find(ele=>ele.email==email);
               console.log(result);
               if(result){
                console.log("Inside statue true");
                res.setHeader('Content-Type','application/json');
                return res.end(JSON.stringify({msg:"Email is already registerd"}))
               }
         else{
               arr.push({name,email,password});
               console.log(arr);
           fs.writeFile('student.json',JSON.stringify(arr));
           res.end(JSON.stringify({msg:"User successfully register"}));
         }
        })
   
    }
})

server.listen(PORT,()=>{
    console.log("Serve is running on::"+PORT);
    
})