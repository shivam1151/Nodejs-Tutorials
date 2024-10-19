const http = require('http');

const fs = require('fs');

// sending index.html file to server
// http.createServer((req,res)=>{
//     const readStream = fs.createReadStream('./index.html','utf-8');
//     res.writeHead(200,{'Content-type':'text/html'});
//     readStream.pipe(res);
// }).listen(3005);

// sending example.json file to server

http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./example.json','utf-8');
    res.writeHead(200,{'Content-type':'application/json'});
    readStream.pipe(res);
}).listen(3005);

// sending example.json file to the server

// http.createServer((req,res)=>{
//     const readStream = fs.createReadStream('./lion.png');
//     res.writeHead(200,{'Content-type':'image/png'});
//     readStream.pipe(res);
// }).listen(3000,()=>{
//     console.log("server is runnig on local port 3000")
// });
