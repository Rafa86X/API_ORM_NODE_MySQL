/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('comandas', 'id_funcionario',{
            allowNull: false,
            type: Sequelize.INTEGER        
        });
        await queryInterface.addColumn('comandas', 'id_produto',{            
            allowNull: false,
            type: Sequelize.INTEGER          
         });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('comandas','id_funcionario');
    }

};