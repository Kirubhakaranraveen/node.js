
const http =require("http");

 const server=http.createServer(function(req,res){
    res.write('Node is open source server environment');
    res.write("<h1>my first server</h1>");
    res.end();
    
})
server.listen(4000);