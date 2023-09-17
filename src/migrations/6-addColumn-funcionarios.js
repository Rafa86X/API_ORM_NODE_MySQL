/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('funcionarios', 'cargo',{
            allowNull: false,
            type: Sequelize.INTEGER        
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('funcionarios','cargo');
    }

};