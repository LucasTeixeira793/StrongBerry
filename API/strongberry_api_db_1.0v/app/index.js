temperatura = sensors.lm35();

console.log("Temperatura: " + temperatura.toFixed(2));

dht11 = sensors.dht11({ minHum: 50, maxHum: 100, minTemp: 18, maxTemp: 23 });

console.log("DHT11 - Umidade: " + dht11[0]);
console.log("DHT11 - Temperatura: " + dht11[1].toFixed(2));
