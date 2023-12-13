const express = require('express'),
	router = express.Router(),
	resources = require('./../resources/model');
	req.result = resources.pi.sensors;
	next();


module.exports = router;
