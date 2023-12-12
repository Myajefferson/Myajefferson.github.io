const resources = require('./../../resources/model');
const sensorDriver = require('node-dht-sensor');

let interval, sensor;
const device = resources.pi.sensors.dht;
let localParams = {'frequency': 2000};

function connectHardware(){
 {
    initialize: function(){
       sensorDriver.initialize(device.model, device.gpio)
    },
    read: function(){
        device.temperature.value = parseFloat(readout.temperature);
        device.humidtiy.value = parseFloat(readout.humidtiy);
    }
    sensor.initialize()
    sensor.read()
        interval = setInterval(function () {
        sensor.read();
    }, localParams.frequency);
}
}
