'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('funcionarios', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nome: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },
            sobrenome: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },

            cpf: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING(11)
        
            },
            data_nascimento: {
                allowNull: false,
                type: Sequelize.DATEONLY
            },
            telefone_01: {
                allowNull: false,
                type: Sequelize.STRING(15)
            },
            telefone_02: {
                type: Sequelize.STRING(15)
            },
            rua: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },
            numero: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            cep: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },
            bairro: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },
            cidade: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },
            estado: {
                allowNull: false,
                type: Sequelize.STRING(2)
            },
            senha: {
                type: Sequelize.STRING(1000)
            },
            email: {
        
                type: Sequelize.STRING(50)
            },
            ativo: {
                allowNull: false,
                defaultValue: 1,
                type: Sequelize.BOOLEAN
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
              },
              updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
              }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('funcionarios');
    }
};