/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('comandas', 'preco',{
                allowNull: false,             
                type: Sequelize.FLOAT           
        });
        await queryInterface.addColumn('comandas', 'descricao',{            
            type: Sequelize.STRING(1000)           
         });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('comandas','preco');
    }

};