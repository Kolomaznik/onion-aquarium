// Example of getter
module.exports.getCurrentTemperature = function() {
    return new Promise(function(resolve, reject) {
        try {
            var currentTemperature = 15;
            console.log("getCurrentTemperature: " + currentTemperature);
            resolve(currentTemperature);
        } catch (err) {
            reject(err);
        }
    });
}

// Example of setter
module.exports.setTemperatureMeasurementInterval = function(interval) {
    return new Promise(function (resolve, reject) {
        try {
            console.log("setTemperatureMeasurementInterval:" + interval);
            // TODO co vratit?
            resolve("OK");
        } catch (err) {
            reject(err);
        }
    });
}
