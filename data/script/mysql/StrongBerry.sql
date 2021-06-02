create database PlantarMorango;
use PlantarMorango;
create table Cliente (
	idCliente int primary key,
    nome_empresa varchar(40), 
	escala_de_produção varchar(40),
    cidade varchar(50),
    bairro varchar(50),
    qtdFuncionarios varchar(50)

);
create table Funcionarios (
	idFuncionario int primary key,
    nome varchar(50),
    telefone varchar(15),
    idade int,
    campoAtuação varchar(50),
	pagamento_fixo float
);
create table Estoque (
	idSensores int  primary key,
    -- tipoEstoque varchar(50),
	sensoresTemperatura int,
	sensoresUmidade int,
    sensoresLuminosidade int,
    endereçoEstoque varchar(100)
     
);
create table Dados (
	idDado int primary key,
    -- sensor_usado varchar(50), 
    leituraTemperatura float,
    leituraUmidade float,
    leituraLumnosidade float
	-- variação_média_temperatura float,
    -- variação_média_umidade float,
	-- variação_média_luminosidade float
	
);