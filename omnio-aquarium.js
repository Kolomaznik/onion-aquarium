var aquarium = require("./libs/aquarium-hw.js");

Promise.all([
    aquarium.getCurrentTemperature(),
    aquarium.setTemperatureMeasurementInterval(20)
]).then(function(data) {
    console.log("Result: " + data);
});