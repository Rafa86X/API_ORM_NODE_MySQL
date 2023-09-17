/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
'use strict';
const {
    Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {

        }
    }
    produtos.init({
        nome_produto: DataTypes.STRING,
        descricao: DataTypes.STRING,
        preco: DataTypes.FLOAT

    }, {
        sequelize,
        modelName: 'produtos',
    });
    return produtos;
};