module.exports = {
    up: (queryInterface, Sequelize) => {
          return queryInterface.bulkInsert('autorizacoes', [
              {
                  id: 1,
                  cargo: 'gerente',
                  autorizacao: 'funcionarios_c funcionarios_r funcionarios_u funcionarios_d comandas_c comandas_r comandas_u comandas_d produtos_c produtos_r produtos_u produtos_d',
                  createdAt: new Date(),
                  updatedAt: new Date()
              },
              {
                id: 2,
                cargo: 'atendente',
                autorizacao: 'comandas_c comandas_r comandas_u comandas_d',
                createdAt: new Date(),
                updatedAt: new Date()
              },
              {
                id: 3,
                cargo: 'estoquista',
                autorizacao: 'produtos_c produtos_r produtos_u produtos_d',
                createdAt: new Date(),
                updatedAt: new Date()
              },
              {
                id: 4,
                cargo: 'caixa',
                autorizacao: 'comandas_u',
                createdAt: new Date(),
                updatedAt: new Date()
              }
      ], {})
    },
  
    down: (queryInterface, Sequelize) => {
          return queryInterface.bulkDelete('autorizacoes', null, {})
    }
  }
  