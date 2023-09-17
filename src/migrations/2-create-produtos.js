/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('produtos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nome_produto: {
                allowNull: false,
                type: Sequelize.STRING(25)
        
            },
            descricao: {
                allowNull: false,
                type: Sequelize.STRING(50)
        
            },
            preco: {
                allowNull: false,
                type: Sequelize.FLOAT,
        
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
        await queryInterface.dropTable('comandas');
    }
};