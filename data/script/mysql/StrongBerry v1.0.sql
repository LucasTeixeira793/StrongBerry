CREATE DATABASE dbStrongBerry;
USE dbStrongBerry;

CREATE TABLE tblCliente(
	idCliente INT PRIMARY KEY AUTO_INCREMENT,
    nomeEmpresa VARCHAR(40) NOT NULL, 
	cnpj CHAR(14) UNIQUE KEY NOT NULL,
    email VARCHAR(50) UNIQUE KEY NOT NULL,
	telefone VARCHAR(11) UNIQUE KEY NOT NULL,
	escalaProducao VARCHAR(40) NOT NULL,
	endereco INT NOT NULL,
	FOREIGN KEY (endereco) REFERENCES tblEndereco (idEndereco)
	
);

CREATE TABLE tblEndereco(
	idEndereco INT PRIMARY KEY AUTO_INCREMENT,
    rua VARCHAR(50) NOT NULL,
    numero VARCHAR(8) NOT NULL,
	cidade VARCHAR(50) NOT NULL,
    bairro VARCHAR(50) NOT NULL,
    cep INT(8) NOT NULL
);


CREATE TABLE tblDadosEstufa (	
    idDadosEstufa INT PRIMARY KEY AUTO_INCREMENT,
	cliente INT NOT NULL,
    leituraTemp FLOAT NOT NULL,
    leituraUmidade FLOAT NOT NULL,
    mediaTemp FLOAT NOT NULL,
	mediaUmidade FLOAT NOT NULL,
	FOREIGN KEY (cliente) REFERENCES tblCliente (idCliente)
);


