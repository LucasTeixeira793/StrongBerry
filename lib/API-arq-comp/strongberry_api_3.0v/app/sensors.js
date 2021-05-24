/* Define os parametros de Maximo e Minimo
    de temperatura dentro do Sensor LM35, além disso
    com uma função ternaria e o Math.random gera os 
    dados aleatorios a partir desses valores de minimo e maximo */

function lm35(min, max) {
    min = typeof min == "undefined" ? 18.7 : min;
    max = typeof max == "undefined" ? 26.3 : max;

    let random = Math.random() * (max - min) + min;

    return random;
}

/* Define um objeto com os parametro de Maximo  e Minimo
    de Umidade e Maximo e Minimo de Temperatura dentro do Sensor DHT11, 
    além disso com o uso das funções ternarias e o Math.random gera os 
    dados aleatorios a partir desses valores de minimo e maximo */
function dht11(options) {
    minHumidity = options.minHum;
    maxHumidity = options.maxHum;

    minTemperature = options.minTemp;
    maxTemperature = options.maxTemp;

    if (minHumidity < 20 || maxHumidity > 100) {
        throw new Error(
            "Os valores minímos e máximos para umidade são 20% e 100% respectivamente."
        );
    }

    if (minTemperature < 0 || maxTemperature > 50) {
        throw new Error(
            "Os valores minímos e máximos para temperatura são 0 e 50 respectivamente."
        );
    }

    minTemperature =
        typeof minTemperature == "undefined" ? 18.7 : minTemperature;
    maxTemperature =
        typeof maxTemperature == "undefined" ? 26.3 : maxTemperature;

    minHumidity = typeof minHumidity == "undefined" ? 64 : minHumidity;
    maxHumidity = typeof maxHumidity == "undefined" ? 71 : maxHumidity;

    let randomHumidity = Math.floor(
        Math.random() * (maxHumidity - minHumidity + 1) + minHumidity
    );

    let randomTemperature =
        Math.random() * (maxTemperature - minTemperature) + minTemperature;

    return [randomHumidity, randomTemperature];
}
/* Exporta os dois sensores como modulos utilizando no caso comando do Node.js */
module.exports = { lm35, dht11 };
