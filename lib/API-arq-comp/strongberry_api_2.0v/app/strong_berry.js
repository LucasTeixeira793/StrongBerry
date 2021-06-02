//const sensor = require("./sensors");

console.log("umidade");
for (i = 0; i < 15; i++) {
    dht11 = sensor.dht11({ minHum: 60, maxHum: 75, minTemp: 12, maxTemp: 32 });
    console.log(dht11[0]);
}

console.log("temperatura");
for (i = 0; i < 15; i++) {
    dht11 = sensor.dht11({ minHum: 60, maxHum: 75, minTemp: 12, maxTemp: 32 });
    console.log(dht11[1].toFixed(2));
}
