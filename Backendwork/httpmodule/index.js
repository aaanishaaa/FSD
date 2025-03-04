const http=require('http');
const PORT=2527;
const server=http.createServer((req,res)=>{
    if (req.url=="/" && req.method=="GET"){
    console.log('request received');
    res.setHeader('Content-Type','text/html');
    //console.log(Object.keys(req));
    // console.log(req.url+" "+req.method);
    res.write("<div style='background-color:black'><h2 style='color:cyan'>welcome to node server,well</h2></div>");
    res.end();
    }
    if(req.url=="/show" && req.method=='POST'){
        res.end(JSON.stringify({
            msg:"successfully hit the postapi @ /show"
        }))
    }
})
server.listen(PORT,()=>{
    console.log('Server is running on port:',PORT);
})