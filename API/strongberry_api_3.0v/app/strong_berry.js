// const sensor = require("./sensors");

/* Laços utilizados para a coleta de dados para fazer 
    um analytics, ou seja analizar eles assim podendo
    criar metricas para o nosso sistema */

/* Tirando Metricas de Temperatura - LM35*/
console.log("Temperatura LM35");
for (i = 0; i < 15; i++) {
    let lm35 = sensor.lm35(18.7, 26.3);
    console.log(lm35.toFixed(2));
}

/* Tirando Metricas de Umidade - DHT11 */
console.log("Umidade DHT11");
for (i = 0; i < 15; i++) {
    let dht11 = sensor.dht11({
        minHum: 64,
        maxHum: 71,
        minTemp: 18.7,
        maxTemp: 26.3,
    });
    console.log(dht11[0]);
}
