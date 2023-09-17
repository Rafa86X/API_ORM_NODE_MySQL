/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
'use strict';
const {
    Model, INTEGER
} = require('sequelize');
const produtos = require('./produtos');
const funcionarios = require('./funcionarios');
module.exports = (sequelize, DataTypes) => {
    class comandas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {

        }
    }
    comandas.init({
        nome_cliente: DataTypes.STRING,
        comanda: DataTypes.INTEGER,
        descricao:DataTypes.STRING,
        preco: DataTypes.FLOAT,
        id_funcionario: DataTypes.INTEGER,
        id_produto: DataTypes.INTEGER,
        data: DataTypes.DATEONLY,
        paga: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'comandas',
    });
    return comandas;
};