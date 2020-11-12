var http = require('http');
http.createServer(function(req,res){
    //whatever coming from server is called request 
    res.writeHead(200,{'Content-Type':'text/plain'});
    console.log('Request url' +req.url);
    res.write("Online book library");
    res.end();
    console.log('This will be printed last');
}).listen(3006);
console.log('This will be printed first');
console.log('Server running in port 3006');