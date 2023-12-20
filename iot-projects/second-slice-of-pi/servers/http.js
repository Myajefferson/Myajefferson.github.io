const express = require('express'),
	cors = require('cors');
	var sensorRoutes = require('./../routes/sensors');
	var actuatorRoutes = require('./../routes/actuators');
	var converter = require('./../middleware/converter');
	var bodyParser = require('body-parser')
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/pi/sensors', sensorRoutes);
app.use('/pi/actuators', sensorRoutes);
app.get('/', function(req, res){
   res.send('Some response for accessing the root');
});

app.get('/pi', function(req, res){
   res.send('Some response for accessing the root');
});

app.use(converter());
module.exports = app;
//I have looked throught all files

