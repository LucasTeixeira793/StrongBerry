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


CREATE TABLE tblCliente(
	idCliente INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(45) NOT NULL,
    `password` VARCHAR(45) NOT NULL,
    nomeEmpresa VARCHAR(40) NOT NULL,
    cnpj CHAR(14) UNIQUE NOT NULL,
    email VARCHAR(80) UNIQUE NOT NULL,
    telefone VARCHAR(11) UNIQUE NOT NULL,
    escalaProducao VARCHAR(40) NOT NULL,
	cep INT NOT NULL,
    numero VARCHAR(8) NOT NULL  
);


CREATE TABLE tblEstufa(
	idEstufa INT AUTO_INCREMENT PRIMARY KEY,
    cliente CHAR(14) NOT NULL,
    FOREIGN KEY (cliente) REFERENCES tblCliente(cnpj),
    nomeEstufa VARCHAR(45) NOT NULL,    
    tipoPlantio INT NOT NULL,
    FOREIGN KEY (tipoPlantio) REFERENCES tblTipoPlantio(idTipoPlantio)
);


CREATE TABLE tblDados(
	idDados INT PRIMARY KEY AUTO_INCREMENT,
    temperatura DECIMAL(5,3) NOT NULL,
    umidade DECIMAL(5,3) NOT NULL,
    dataColeta DATETIME NOT NULL,
	estufa INT,
	FOREIGN KEY (estufa) REFERENCES tblEstufa(idEstufa)

);

INSERT INTO tblTipoPlantio (nomeTipoPlantio, tempoPlantio, maxTemp, mediaTemp, minTemp, maxUmidade, mediaUmidade, minUmidade, descricao) 
	VALUES	('Vertical','75 dias', 30.00, 22.00, 15.00, 99.00, 80.00, 60.00, 'Plantio vertical de morangos'),
			('Solo','90 dias', 40.00, 28.00, 10.00, 99.00, 80.00, 60.00, 'Pantio de morangos no solo'),
            ('Hidroponico','60 dias', 30.00, 21.00, 18.00, 99.00, 80.00, 60.00, 'Pantio hidroponico de morangos'),
            ('Semi-Hidroponico','70 dias', 44.00, 30.00, 25.00, 99.00, 80.00, 60.00, 'Pantio semi-hidroponico de morangos');
                        
INSERT INTO tblCliente (username, `password`, nomeEmpresa, email, cnpj, telefone,cep, numero, escalaProducao) 
	VALUES	('João Runas', '125@j12154', 'DinosMorangos', 'RuasJoão.gmail.com', 15987423698745, 11954788547, 09856070, '120A',  800),
			('Henrique Piassi', '@jhfsi@154', 'Corvosberrys', 'Hpiassi.gmail.com', 15987445663254, 11965877412, 08457030, '95B', 900),
			('Enan Oliveira', '_18515_@#ihji', 'techBerry', 'Enan.Oliv@hotmail.com', 15987456324178, 11965233652, 01254060, '200', 1000),
			('Roberta Pires', '1763192_a@df', 'Moranguinhos Felizes', 'Roberta@Pires.gmail.com', 54123698745632, 05412090, 1165412398, '854', 1500),
			('Lucas Teixeira', '515/5454*954', 'Safrorangos', 'Teixeira_Luc@s.outlook.com', 15984726332145, 11987456325, 06589070, '221B', 1600);
            
            
INSERT INTO tblEstufa (cliente, nomeEstufa, tipoPlantio)
	VALUES ('15987423698745','Dino1',1),
		   ('15987445663254','Corvo1',2),
           ('15987456324178','Tech1',3),
           ('54123698745632','Moranguinho1',4),
           ('15984726332145','Safro1',1);
           


-- SELECT * FROM tblTipoPlantio;
-- SELECT * FROM tblCliente;
-- SELECT * FROM tblEstufa;
-- SELECT * FROM tblDados;
