/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
'use strict';
const {
    Model
} = require('sequelize');
const comandas = require('./comandas');
module.exports = (sequelize, DataTypes) => {
    class funcionarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {

        }
    }
    funcionarios.init({
        cargo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Cargo não pode ser vazio.'
                },
                notEmpty:{
                    msg: 'Digite um cargo válido.'
                }
            }
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Nome não pode ser vazio.'
                },
                notEmpty:{
                    msg: 'Digite um nome válido.'
                }
            }
        },
        email: DataTypes.STRING,
        cpf: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'CPF não pode ser vazio.'
                },
                notEmpty:{
                    msg: 'Digite um CPF válido.'
                }
            }
        },
        senha: DataTypes.STRING,
        sobrenome: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Sobrenome não pode ser vazio.'
                },
                notEmpty:{
                    msg: 'Digite um sobrenome válido.'
                }
            }
        },
        data_nascimento: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Data de nascimento não pode ser vazio.'
                },
                notEmpty:{
                    msg: 'Digite uma Data de nascimento válido.'
                }
            }
        },
        telefone_01: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Telefone não pode ser vazio.'
                },
                notEmpty:{
                    msg: 'Digite um telefone válido.'
                }
            }
        },
        telefone_02: DataTypes.STRING,
        rua: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Rua não pode ser vazio.'
                },
                notEmpty:{
                    msg: 'Digite uma rua válida.'
                }
            }
        },
        numero: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Numero não pode ser vazio.'
                },
                notEmpty:{
                    msg: 'Digite um numero válido.'
                }
            }
        },
        cep: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Cep não pode ser vazio.'
                },
                notEmpty:{
                    msg: 'Digite um cep válido.'
                }
            }
        },
        bairro: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Bairro não pode ser vazio.'
                },
                notEmpty:{
                    msg: 'Digite um bairro válido.'
                }
            }
        },
        cidade: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Cidade não pode ser vazio.'
                },
                notEmpty:{
                    msg: 'Digite uma cidade válido.'
                }
            }
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Estado não pode ser vazio.'
                },
                notEmpty:{
                    msg: 'Digite um estado válido.'
                }
            }
        },
        ativo: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'funcionarios',
    });
    return funcionarios;
};