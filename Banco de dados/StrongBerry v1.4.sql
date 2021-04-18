CREATE DATABASE bdStrongBerry;
USE bdStrongBerry;

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
	idSensores INT,
    estufa INT,
    FOREIGN KEY (estufa) REFERENCES tblEstufa(idEstufa),
    PRIMARY KEY (idSensores, estufa)
);

CREATE TABLE tblDados(
	idDados INT,
    sensores INT,
    FOREIGN KEY (sensores) REFERENCES tblSensores(idSensores),
    PRIMARY KEY (idDados, sensores),
    temperatura DECIMAL(5,3) NOT NULL,
    umidade DECIMAL(5,3) NOT NULL,
    dataColeta DATETIME NOT NULL
    
);

INSERT INTO tblTipoPlantio (nomeTipoPlantio, tempoPlantio, maxTemp, mediaTemp, minTemp, maxUmidade, mediaUmidade, minUmidade, descricao) 
	VALUES	('','', 1, 1, 1, 1, 1, 1, ''),
			('','', 1, 1, 1, 1, 1, 1, ''),
			('','', 1, 1, 1, 1, 1, 1, ''),
			('','', 1, 1, 1, 1, 1, 1, ''),
			('','', 1, 1, 1, 1, 1, 1, '');
            
INSERT INTO tblEndereco (rua, numero, bairro, cidade, cep) 
	VALUES	('', '', '', '', 1),
			('', '', '', '', 1),
			('', '', '', '', 1),
			('', '', '', '', 1),
			('', '', '', '', 1);
            
INSERT INTO tblEstufa (idEstufa, cliente, nomeEstufa, tipoPlantio)
	VALUES (1,1,'',1),
		   (1,1,'',1),
           (1,1,'',1),
           (1,1,'',1),
           (1,1,'',1);
           
INSERT INTO tblSensores (idSensores, estufa) 
	 VALUES (1,1),
			(1,1),
            (1,1),
            (1,1),
            (1,1);
            
INSERT INTO tblDados (idDados, sensores, temperatura, umidade, dataColeta)
	VALUES (1,1, 1, 1, '11111111'),
		   (1,1, 1, 1, '11111111'),
           (1,1, 1, 1, '11111111'),
           (1,1, 1, 1, '11111111'),
           (1,1, 1, 1, '11111111');
