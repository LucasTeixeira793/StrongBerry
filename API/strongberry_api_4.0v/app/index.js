const sensors = require("./sensors.js");

/* Mostra no console os dados que são gerados do Sensor LM35 */
temperatura = sensors.lm35();
console.log("Temperatura: " + temperatura.toFixed(2));

/* Mostra no console os dados que são gerados do Sensor DHT11 
    tanto relacionados a Umidade quanto Temperatura */
dht11 = sensors.dht11({ minHum: 50, maxHum: 100, minTemp: 18, maxTemp: 23 });
console.log("DHT11 - Umidade: " + dht11[0]);
console.log("DHT11 - Temperatura: " + dht11[1].toFixed(2));

/* Não mostra realmente nada no console, pois como são muitos dados gerados rapidamente
    o navegador da block na visualização desses dados no console automaticamente para
    que a página não fique pesada */
