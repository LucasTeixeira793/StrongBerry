var express = require("express");
var router = express.Router();
var sequelize = require("../models").sequelize;
var Leitura = require("../models").tblDados;
var env = process.env.NODE_ENV || "development";

/* Recuperar as últimas N leituras */
router.get("/ultimas/:idcaminhao", function (req, res, next) {
    // quantas são as últimas leituras que quer? 7 está bom?
    const limite_linhas = 7;
    
    var idcaminhao = req.params.idcaminhao;

    console.log(`Recuperando as ultimas ${limite_linhas} leituras`);

    let instrucaoSql = "";

    if (env == "dev") {
        // abaixo, escreva o select de dados para o Workbench
        instrucaoSql = `select 
		temperatura, 
		umidade, 
		dataColeta,
		DATE_FORMAT(dataColeta,'%H:%i:%s') as momento_grafico
		from tblDados
		where estufa = ${idcaminhao}
		order by idDados desc limit ${limite_linhas}`;
    } else if (env == "production") {
        // abaixo, escreva o select de dados para o SQL Server
        instrucaoSql = `select top ${limite_linhas} 
		temperatura, 
		umidade, 
		dataColeta,
		FORMAT(dataColeta,'HH:mm:ss') as momento_grafico
		from tblDados
		where estufa = ${idcaminhao}
		order by idDados desc`;
    } else {
        console.log("\n\n\n\nVERIFIQUE O VALOR DE LINHA 1 EM APP.JS!\n\n\n\n");
    }

    sequelize
        .query(instrucaoSql, {
            model: Leitura,
            mapToModel: true,
        })
        .then((resultado) => {
            console.log(`Encontrados: ${resultado.length}`);
            res.json(resultado);
        })
        .catch((erro) => {
            console.error(erro);
            res.status(500).send(erro.message);
        });
});

router.get("/tempo-real/:idcaminhao", function (req, res, next) {
    console.log("Recuperando caminhões");

    //var idcaminhao = req.body.idcaminhao; // depois de .body, use o nome (name) do campo em seu formulário de login
    var idcaminhao = req.params.idcaminhao;

    let instrucaoSql = "";

    if (env == "dev") {
        // abaixo, escreva o select de dados para o Workbench
        instrucaoSql = `select temperatura, umidade, DATE_FORMAT(dataColeta,'%H:%i:%s') as momento_grafico, estufa from tblDados where estufa = ${idcaminhao} order by idDados desc limit 1`;
    } else if (env == "production") {
        // abaixo, escreva o select de dados para o SQL Server
        instrucaoSql = `select top 1 temperatura, umidade, FORMAT(dataColeta,'HH:mm:ss') as momento_grafico, estufa from tblDados where estufa = ${idcaminhao} order by idDados desc`;
    } else {
        console.log("\n\n\n\nVERIFIQUE O VALOR DE LINHA 1 EM APP.JS!\n\n\n\n");
    }

    console.log(instrucaoSql);

    sequelize
        .query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
        .then((resultado) => {
            res.json(resultado[0]);
        })
        .catch((erro) => {
            console.error(erro);
            res.status(500).send(erro.message);
        });
});

// estatísticas (max, min, média, mediana, quartis etc)
router.get("/estatisticas", function (req, res, next) {
    console.log(`Recuperando as estatísticas atuais`);

    const instrucaoSql = `select 
							max(temperatura) as temp_maxima, 
							min(temperatura) as temp_minima, 
							avg(temperatura) as temp_media,
							max(umidade) as umidade_maxima, 
							min(umidade) as umidade_minima, 
							avg(umidade) as umidade_media 
						from tblDados`;

    sequelize
        .query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
        .then((resultado) => {
            res.json(resultado[0]);
        })
        .catch((erro) => {
            console.error(erro);
            res.status(500).send(erro.message);
        });
});

module.exports = router;
