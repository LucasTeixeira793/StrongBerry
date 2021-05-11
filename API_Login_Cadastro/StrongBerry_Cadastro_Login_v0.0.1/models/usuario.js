"use strict";

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let tblcliente = sequelize.define(
        "tblcliente",
        {
            idCliente: {
                field: "idCliente",
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            username: {
                field: "username",
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                field: "password",
                type: DataTypes.STRING,
                allowNull: false,
            },
            nomeEmpresa: {
                field: "nomeEmpresa",
                type: DataTypes.STRING,
                allowNull: false,
            },
            cnpj: {
                field: "cnpj",
                type: DataTypes.CHAR,
                allowNull: false,
                unique: true,
            },
            email: {
                field: "email",
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            telefone: {
                field: "telefone",
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            escalaProducao: {
                field: "escalaProducao",
                type: DataTypes.STRING,
                allowNull: false,
            },
            endereco: {
                field: "endereco",
                type: DataTypes.INTEGER,
                foreignKey: true,
                allowNull: false,
            },
        },
        {
            tableName: "tblcliente",
            freezeTableName: true,
            underscored: true,
            timestamps: false,
        }
    );

    return tblcliente;
};

module.exports = (sequelize, DataTypes) => {
    let tblendereco = sequelize.define(
        "tblendereco",
        {
            idEndereco: {
                field: "idEndereco",
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            rua: {
                field: "rua",
                type: DataTypes.STRING,
                allowNull: false,
            },
            numero: {
                field: "numero",
                type: DataTypes.STRING,
                allowNull: false,
            },
            cidade: {
                field: "cidade",
                type: DataTypes.STRING,
                allowNull: false,
            },
            bairro: {
                field: "bairro",
                type: DataTypes.STRING,
                allowNull: false,
            },
            cep: {
                field: "cep",
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: "tblendereco",
            freezeTableName: true,
            underscored: true,
            timestamps: false,
        }
    );

    return tblendereco;
};
