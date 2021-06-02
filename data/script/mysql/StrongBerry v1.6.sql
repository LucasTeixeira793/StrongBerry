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
	idSensores INT PRIMARY KEY AUTO_INCREMENT,
    estufa INT,
    FOREIGN KEY (estufa) REFERENCES tblEstufa(idEstufa)    
);

CREATE TABLE tblDados(
	idDados INT PRIMARY KEY AUTO_INCREMENT,
    sensores INT,
    FOREIGN KEY (sensores) REFERENCES tblSensores(idSensores),
    temperatura DECIMAL(5,3) NOT NULL,
    umidade DECIMAL(5,3) NOT NULL,
    dataColeta DATETIME NOT NULL
    
);

INSERT INTO tblTipoPlantio (nomeTipoPlantio, tempoPlantio, maxTemp, mediaTemp, minTemp, maxUmidade, mediaUmidade, minUmidade, descricao) 
	VALUES	('Vertical','75 dias', 30.00, 22.00, 15.00, 99.00, 80.00, 60.00, 'Plantio vertical de morangos'),
			('Solo','90 dias', 40.00, 28.00, 10.00, 99.00, 80.00, 60.00, 'Pantio de morangos no solo'),
            ('Hidroponico','60 dias', 30.00, 21.00, 18.00, 99.00, 80.00, 60.00, 'Pantio hidroponico de morangos'),
            ('Semi-Hidroponico','70 dias', 44.00, 30.00, 25.00, 99.00, 80.00, 60.00, 'Pantio semi-hidroponico de morangos');
            
INSERT INTO tblEndereco (rua, numero, bairro, cidade, cep) 
	VALUES	('Rua das Pedras', '120A', 'Carrão', 'São Paulo', 09856070),
			('Rua Visconde de Inhaûma', '95B', 'Oswaldo Cruz', 'São Caetano do Sul', 08457030),
			('Rua São Francisco', '200', 'Jardim São Francisco', 'Ribeirão Pires', 01254060),
			('Rua Rachid Saldanha', '854', 'Centro-SP', 'São Paulo', 05412090),
			('Rua Ruas João', '221B', 'Bakers', 'Santo André', 06589070);
            
INSERT INTO tblCliente (username, `password`, nomeEmpresa, email, cnpj, telefone, escalaProducao, endereco) 
	VALUES	('João Runas', '125@j12154', 'DinosMorangos', 'RuasJoão.gmail.com', 15987423698745, 11954788547, 800, 1),
			('Henrique Piassi', '@jhfsi@154', 'Corvosberrys', 'Hpiassi.gmail.com', 15987445663254, 11965877412, 900, 3),
			('Enan Oliveira', '_18515_@#ihji', 'techBerry', 'Enan.Oliv@hotmail.com', 15987456324178, 11965233652, 1000, 2),
			('Roberta Pires', '1763192_a@df', 'Moranguinhos Felizes', 'Roberta@Pires.gmail.com', 54123698745632, 1165412398, 1500, 4),
			('Lucas Teixeira', '515/5454*954', 'Safrorangos', 'Teixeira_Luc@s.outlook.com', 15984726332145, 11987456325, 1600, 5);
            
            
INSERT INTO tblEstufa (idEstufa, cliente, nomeEstufa, tipoPlantio)
	VALUES (1,1,'Dino1',1),
		   (2,2,'Corvo1',2),
           (3,3,'Tech1',3),
           (4,4,'Moranguinho1',4),
           (5,5,'Safro1',1);
           
INSERT INTO tblSensores (idSensores, estufa) 
	 VALUES (1,3),
			(2,2),
            (3,1),
            (4,5),
            (5,4);
            
INSERT INTO tblDados (idDados, sensores, temperatura, umidade, dataColeta)
	VALUES (1, 2, 22.90, 80, '2021-05-10 01:40:50.995000'),
		   (2, 3, 25.80, 75, '2021-06-10 10:06:36.999900'),
           (3, 4, 30.09, 79, '2021-12-25 12:00:00.955451'),
           (4, 5, 15.08, 60, '2021-10-20 05:40:30.945944'),
           (5, 1, 19.65, 69, '2021-11-01 02:10:20.554741');
           
SELECT * FROM tblTipoPlantio;
SELECT * FROM tblEndereco;
SELECT * FROM tblCliente;
SELECT * FROM tblEstufa;
SELECT * FROM tblSensores;
SELECT * FROM tblDados;
