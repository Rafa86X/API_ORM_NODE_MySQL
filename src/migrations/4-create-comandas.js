/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('comandas', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            comanda: {
                allowNull: false,
                type: Sequelize.INTEGER,
        
            },
            data: {
                allowNull: false,
                type: Sequelize.DATEONLY,
      
            },
            nome_cliente: {
                type: Sequelize.STRING(50)
            },
            paga: {
                allowNull: false,
                defaultValue: 0,
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
        await queryInterface.dropTable('comandas');
    }
};