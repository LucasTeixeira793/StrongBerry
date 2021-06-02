const express = require("express");
const { ArduinoDataTemp } = require("./newserial");
const { ArduinoDataHumidity } = require("./serialHumidity");
const router = express.Router();

/* Retireciona os objetos de dados criados no newserial.js para dentro
    de uma função que passara esses parametros para o server side aonde
    serão gerados os dados de Temperatura do Sensor LM35 na Porta 3000
    em um arquivo .json */
router.get("/", (request, response, next) => {
    let sum = ArduinoDataTemp.List.reduce((a, b) => a + b, 0);
    let average = (sum / ArduinoDataTemp.List.length).toFixed(2);
    let sumHour = ArduinoDataTemp.ListHour.reduce((a, b) => a + b, 0);
    let averageHour = (sumHour / ArduinoDataTemp.ListHour.length).toFixed(2);

    response.json({
        data: ArduinoDataTemp.List,
        total: ArduinoDataTemp.List.length,
        average: isNaN(average) ? 0 : average,
        dataHour: ArduinoDataTemp.ListHour,
        totalHour: ArduinoDataTemp.ListHour.length,
        averageHour: isNaN(averageHour) ? 0 : averageHour,
    });
});

/* Retireciona os objetos de dados criados no serialHumidity.js para dentro
    de uma função que passara esses parametros para o server side aonde
    serão gerados os dados de Humidade e Temperatura do Sensor DHT11 na Porta 3000
    em um arquivo .json */
router.get("/humidity", (request, response, next) => {
    let sum = ArduinoDataHumidity.List.reduce((a, b) => a + b, 0);
    let average = (sum / ArduinoDataHumidity.List.length).toFixed(2);
    let sumHour = ArduinoDataHumidity.ListHour.reduce((a, b) => a + b, 0);
    let averageHour = (sumHour / ArduinoDataHumidity.ListHour.length).toFixed(
        2
    );

    response.json({
        data: ArduinoDataHumidity.List,
        total: ArduinoDataHumidity.List.length,
        average: isNaN(average) ? 0 : average,
        dataHour: ArduinoDataHumidity.ListHour,
        totalHour: ArduinoDataHumidity.ListHour.length,
        averageHour: isNaN(averageHour) ? 0 : averageHour,
    });
});

module.exports = router;
