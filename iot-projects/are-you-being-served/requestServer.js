// requestServer.js file
const http = require("http");
const request = require("request");

const port = 8686;
function callbackFunction(error, response, body){

}
http.createServer(function (req, res) {
request('https://Myajefferson.github.io', callbackFunction);
}).listen(8686)