// requestServer.js file
const http = require("http");
const request = require("request");
const port = 8686;

let githubL = 'https://Myajefferson.github.io';
var args = process.argv.slice(2);
http.createServer(function (req, res) {
    var url = args[0] ? args[0] : "https://youtu.be/dQw4w9WgXcQ?si=wAoJVqts2Qmlko_F";
    request(url, function callbackFunction(error, response, body) {
        console.dir({r: response.statusCode, error},{depth:null})
        if (!body || !response || (error === null && response.statusCode !== 200)) {
            res.end("bad URL\n");
            return;
        }
        if (response.statusCode === 200 && !error === true) {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.end(body);
            return;
        }
        if (response.statusCode === 200) {
            res.write(error);
            return;
        }
        res.end("something bad happened")
    });
}).listen(port)