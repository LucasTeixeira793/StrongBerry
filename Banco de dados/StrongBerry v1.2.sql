CREATE DATABASE bdStrongBerry;
USE bdStrongBerry;

CREATE TABLE tblTipoPlantio(
	idTipoPlantio INT PRIMARY KEY,
	nomeTipoPlantio VARCHAR(45) NOT NULL,
	tempoPlantio VARCHAR(45) NOT NULL,
	mediaTemp DECIMAL(5,3) NOT NULL,
	mediaUmidade DECIMAL(5,3) NOT NULL,
	descricao VARCHAR(45) NOT NULL
);

CREATE TABLE tblEndereco(
	idEndereco INT PRIMARY KEY,
	rua VARCHAR(50) NOT NULL,
	numero VARCHAR(8) NOT NULL,
	cidade VARCHAR(50) NOT NULL,
	bairro VARCHAR(50) NOT NULL,
	cep INT NOT NULL 
);

CREATE TABLE tblCliente(
	idCliente INT PRIMARY KEY,
    username VARCHAR(45) NOT NULL,
    `password` VARCHAR(45) NOT NULL,
    nomeEmpresa VARCHAR(40) NOT NULL,
    cnpj CHAR(14) UNIQUE KEY NOT NULL,
    email VARCHAR(80) UNIQUE KEY NOT NULL,
    telefone VARCHAR(11) UNIQUE KEY NOT NULL,
    escalaProducao VARCHAR(40) NOT NULL,
    endereco INT NOT NULL,
    FOREIGN KEY (endereco) REFERENCES tblEndereco(idEndereco)    
);

CREATE TABLE tblEstufa(
	idEstufa INT PRIMARY KEY,
    nomeEstufa VARCHAR(45) NOT NULL,
    cliente INT NOT NULL,
    tipoPlantio INT NOT NULL,
    FOREIGN KEY (cliente) REFERENCES tblCliente(idCliente),
    FOREIGN KEY (tipoPlantio) REFERENCES tblTipoPlantio(idTipoPlantio)
);

CREATE TABLE tblSendores(
	idsensores INT PRIMARY KEY,
    temperaturaMax DECIMAL(5,3) NOT NULL,
    temperaturaMin DECIMAL(5,3) NOT NULL,
    umidadeMax DECIMAL(5,3) NOT NULL,
    umidadeMin DECIMAL(5,3) NOT NULL,
    estufa INT NOT NULL,
    FOREIGN KEY (estufa) REFERENCES tblEstufa(idEstufa)
);

CREATE TABLE tblDados(
	idDados INT PRIMARY KEY,
    temperatura DECIMAL(5,3) NOT NULL,
    umidade DECIMAL(5,3) NOT NULL,
    dataColeta DATETIME NOT NULL,
    sensor INT NOT NULL,
    FOREIGN KEY (sensor) REFERENCES tblSensor(idSensor)
);