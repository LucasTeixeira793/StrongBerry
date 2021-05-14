-- CREATE DATABASE db_strongberry_api_version;
USE db_strongberry_api_version;

CREATE TABLE tblTipoPlantio(
	idTipoPlantio INT PRIMARY KEY AUTO_INCREMENT,
	nomeTipoPlantio VARCHAR(45) NOT NULL,
	tempoPlantio VARCHAR(45) NOT NULL,
    maxTemp  DECIMAL(5,3) NOT NULL,
	mediaTemp DECIMAL(5,3) NOT NULL,
    minTemp  DECIMAL(5,3) NOT NULL,
    maxUmidade  DECIMAL(5,3) NOT NULL,
	mediaUmidade DECIMAL(5,3) NOT NULL,
    minUmidade  DECIMAL(5,3) NOT NULL,
	descricao VARCHAR(45) NOT NULL
);

CREATE TABLE tblEndereco(
	idEndereco INT PRIMARY KEY AUTO_INCREMENT,
	rua VARCHAR(50) NOT NULL,
	numero VARCHAR(8) NOT NULL,
	cidade VARCHAR(50) NOT NULL,
	bairro VARCHAR(50) NOT NULL,
	cep INT NOT NULL 
);

CREATE TABLE tblCliente(
	idCliente INT PRIMARY KEY AUTO_INCREMENT,
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
	idEstufa INT,
    cliente INT,
    FOREIGN KEY (cliente) REFERENCES tblCliente(idCliente),
    PRIMARY KEY(idEstufa, cliente),
    nomeEstufa VARCHAR(45) NOT NULL,    
    tipoPlantio INT NOT NULL,
    FOREIGN KEY (tipoPlantio) REFERENCES tblTipoPlantio(idTipoPlantio)
);

CREATE TABLE tblSensores(
	fkDadosTemp INT,
    FOREIGN KEY (fkDadosTemp) REFERENCES tblDadosTemp(idDadosTemp),
    fkDadosUmi INT,
    FOREIGN KEY (fkDadosUmi) REFERENCES tblDadosUmi(idDadosUmi),
    fkEstufa INT,
    FOREIGN KEY (fkEstufa) REFERENCES tblEstufa(idEstufa),
    fkCliente INT,
    FOREIGN KEY (fkCliente) REFERENCES tblCliente(idCliente)
);

CREATE TABLE tblDadosTemp(
	idDadosTemp INT PRIMARY KEY AUTO_INCREMENT,
    temperatura DOUBLE(10,2) NOT NULL,
    dataColeta DATETIME NOT NULL
);

CREATE TABLE tblDadosUmi(
	idDadosUmi INT PRIMARY KEY AUTO_INCREMENT,
    umidade DOUBLE(10,2) NOT NULL,
    dataColeta DATETIME NOT NULL
);

-- SELECT idDadosTemp, temperatura, tblDadosTemp.dataColeta, idDadosUmi, umidade, tblDadosUmi.dataColeta, idEstufa, nomeEstufa, idCliente, nomeEmpresa
-- 	FROM tblSensores 
-- 	JOIN tblDadosTemp ON fkDadosTemp = idDadosTemp
--  JOIN tblDadosUmi ON fkDadosUmi = idDadosUmi
--  JOIN tblEstufa ON fkEstufa = idEstufa
--  JOIN tblCliente ON fkCliente = idCliente;



