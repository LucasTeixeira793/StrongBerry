	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let tblCliente = sequelize.define('tblCliente',{
		idCliente: {
			field: 'idCliente',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		username: {
			field: 'username',
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			field: 'password',
			type: DataTypes.STRING,
			allowNull: false
		},
		nomeEmpresa: {
			field: 'nomeEmpresa',
			type: DataTypes.STRING,
			allowNull: false
		},
		cnpj: {
			field: 'cnpj',
			type: DataTypes.CHAR,
			allowNull: false
		},
		telefone: {
			field: 'telefone',
			type: DataTypes.STRING,
			allowNull: false
		},
		escalaProducao: {
			field: 'escalaProducao',
			type: DataTypes.STRING,
			allowNull: false
		},
		endereco: {
			field: 'endereco',
			type: DataTypes.INTEGER,
			allowNull: false
		},

	}, 
	{
		tableName: 'tblCliente', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return tblCliente;
};
