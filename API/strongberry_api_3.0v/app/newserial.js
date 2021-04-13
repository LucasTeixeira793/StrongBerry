const sensors = require("./sensors");

/* Cria os parametros de Dados que serão gerados dentro do Sensor LM35
    e Exporta como modulos para que possam ser utilizados no sistema */
class NewArduino {
    constructor() {
        this.listData = [];
        this.__listDataTemp = [];
        this.listDataHour = [];
    }

    get List() {
        return this.listData;
    }

    get ListHour() {
        return this.listDataHour;
    }

    SetConnection() {
        setInterval(() => {
            let data_float = sensors.lm35();

            if (this.__listDataTemp.length === 59) {
                let sum = this.__listDataTemp.reduce((a, b) => a + b, 0);
                this.listDataHour.push(
                    (sum / this.__listDataTemp.length).toFixed(2)
                );
                while (this.__listDataTemp.length > 0) {
                    this.__listDataTemp.pop();
                }
            }

            this.__listDataTemp.push(data_float);
            this.listData.push(data_float);
        }, 100);
    }
}

const serial = new NewArduino();
serial.SetConnection();
/* Exporta os Modulos dos Tipos de Dados Criados */

module.exports.ArduinoDataTemp = {
    List: serial.List,
    ListHour: serial.ListHour,
};
