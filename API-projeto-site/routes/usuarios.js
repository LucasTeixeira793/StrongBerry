var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var tblCliente = require('../models').tblCliente;

let sessoes = [];

/* Recuperar usuário por email e password */
router.post('/autenticar', function(req, res, next) {
	console.log('Recuperando usuário por email e password');

	var email = req.body.email; // depois de .body, use o username (name) do campo em seu formulário de email
	var password = req.body.password; // depois de .body, use o username (name) do campo em seu formulário de email	
	
	let instrucaoSql = `select * from tblCliente where email='${email}' and password='${password}'`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
		model: tblCliente
	}).then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);

		if (resultado.length == 1) {
			sessoes.push(resultado[0].dataValues.email);
			console.log('sessoes: ',sessoes);
			res.json(resultado[0]);
		} else if (resultado.length == 0) {
			res.status(403).send('email e/ou password inválido(s)');
		} else {
			res.status(403).send('Mais de um usuário com o mesmo email e password!');
		}

	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

/* Cadastrar usuário */
router.post('/cadastrar', function(req, res, next) {
	console.log('Criando um usuário');
	
	tblCliente.create({
		username : req.body.username,
		email : req.body.email,
		password: req.body.password,
		nomeEmpresa: req.body.nomeEmpresa,
		cnpj: req.body.cnpj,
		telefone: req.body.telefone,
		escalaProducao: req.body.escalaProducao,
		endereco: req.body.endereco,
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
        res.send(resultado);
    }).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});


/* Verificação de usuário */
router.get('/sessao/:email', function(req, res, next) {
	let email = req.params.email;
	console.log(`Verificando se o usuário ${email} tem sessão`);
	
	let tem_sessao = false;
	for (let u=0; u<sessoes.length; u++) {
		if (sessoes[u] == email) {
			tem_sessao = true;
			break;
		}
	}

	if (tem_sessao) {
		let mensagem = `Usuário ${email} possui sessão ativa!`;
		console.log(mensagem);
		res.send(mensagem);
	} else {
		res.sendStatus(403);
	}
	
});


/* Logoff de usuário */
router.get('/sair/:email', function(req, res, next) {
	let email = req.params.email;
	console.log(`Finalizando a sessão do usuário ${email}`);
	let nova_sessoes = []
	for (let u=0; u<sessoes.length; u++) {
		if (sessoes[u] != email) {
			nova_sessoes.push(sessoes[u]);
		}
	}
	sessoes = nova_sessoes;
	res.send(`Sessão do usuário ${email} finalizada com sucesso!`);
});


/* Recuperar todos os usuários */
router.get('/', function(req, res, next) {
	console.log('Recuperando todos os usuários');
	tblCliente.findAndCountAll().then(resultado => {
		console.log(`${resultado.count} registros`);

		res.json(resultado.rows);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

module.exports = router;
