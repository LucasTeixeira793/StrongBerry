"use strict";

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let tblDados = sequelize.define(
        "tblDados",
        {
            idDados: {
                field: "idDados",
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            estufa: {
                field: "estufa",
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            temperatura: {
                field: "temperatura",
                type: DataTypes.REAL,
                allowNull: false,
            },
            umidade: {
                field: "umidade",
                type: DataTypes.REAL,
                allowNull: false,
            },
            dataColeta: {
                field: "dataColeta",
                type: DataTypes.DATE, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
                allowNull: false,
            },
            momento_grafico: {
                type: DataTypes.VIRTUAL, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
                allowNull: true,
            },
        },
        {
            tblDados: "tblDados",
            freezeTableName: true,
            underscored: true,
            timestamps: false,
        }
    );

    return tblDados;
};
