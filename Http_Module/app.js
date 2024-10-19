const http = require('http');

// On callling http.createServer(), we will receive request and response object
const server = http.createServer((req,res)=>{

    if(req.url == '/'){
        res.write('Hello world from node js');
        res.end();
    }
    else{
        res.write("using some other domain");
        res.end();
    }
    
})

server.listen('3000');