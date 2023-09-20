const http = require("http");
const port = process.argv[2];

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("BA C ON ");
    res.end('bacon');
}).listen(port)

//     192.168.87.244.