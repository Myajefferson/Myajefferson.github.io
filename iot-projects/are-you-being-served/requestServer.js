// requestServer.js file
const http = require("http");
const request = require("request");

const port = 8686;
function callbackFunction(error, response, body) {
    if (!body || !response || (error === null && response.statusCode !== 200)){
        res.end("bad URL\n");
        return;
    }
    if(response.statusCode === 200 && "text/plain"){
       res.end();
       return error.toString();
        
    } 
}
http.createServer(function (req, res) {
    request('https://Myajefferson.github.io', callbackFunction);
}).listen(8686)