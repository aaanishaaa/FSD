const http = require("http");
const PORT = 3510;
const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "text/html");
  const data = await fetch("https://fakestoreapi.com/products");
  const jsondata = await data.json();
//   console.log(jsondata[0].category);
//   res.end(jsondata[0].category);
    const htmltemp=`
    <html>
    <head>
    </head>
    <body>
    <div>
    <img src=${jsondata[1].image} height =200px width=200px/>
    ${jsondata[1].category}
    </div>
    </body>
    </html>
    `
    res.end(htmltemp);
});

server.listen(PORT, () => {
  console.log("Server is running on ->" + PORT);
});
