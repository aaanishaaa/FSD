const fs = require("fs").promises;
const http = require("http");
const PORT = 2500;
const server = http.createServer(async (request, response) => {
//   try {
//     // response.setHeader("Content-Type", "text/html");
//     response.write("Welcome to HTTP and FS module");
//     const data = await fs.readFile("student.json", { encoding: "utf-8" });
//     response.write(`<h2> style='color:yellow'>%{data}</h2>`)
//     response.end(data);
//   } catch (err) {
//     console.log("Error while reading file" + err);
//   }
if(request.url=='/home' && request.method=='GET'){
        response.setHeader('Content-Type','text/html');
        const htmltemp=await fs.readFile('home.html');
        response.end(htmltemp);
  }
else if(request.url=='/textdata' && request.method=='GET'){
    response.setHeader('Content-Type','text/html');
    const texttemp=await fs.readFile('textdata.html');
    response.end(texttemp);
}
else{
  response.setHeader('Content-Type','text/html');
  const errtemp=await fs.readFile('error.html');
  response.end(errtemp);
}
});
server.listen(PORT, () => {
  console.log("Server is running on -> 2500");
})
