/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class autorizacoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {

        }
    }
    autorizacoes.init({
        cargo: DataTypes.STRING,
        autorizacao: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'autorizacoes',
    });
    return autorizacoes;
};