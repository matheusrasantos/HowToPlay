CREATE DATABASE HowToPlay;

USE HowToPlay;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	CPF VARCHAR(50),
    cargo ENUM('Administrador','Estoquista'),
	senha VARCHAR(50),
    estado boolean
);
insert into usuario VALUES ( "1",
"victor", "victor@email.com","50371887844","Administrador", "victor1122", true );
select * from usuario;

CREATE TABLE produtos( 
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
preco FLOAT,
estoque int)