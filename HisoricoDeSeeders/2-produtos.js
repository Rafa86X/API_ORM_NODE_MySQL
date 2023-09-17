module.exports = {
    up: (queryInterface, Sequelize) => {
          return queryInterface.bulkInsert('produtos', [
              {
                  id: 100100,
                  nome_produto: 'Almoço normal',
                  descricao: 'Almoço norml a kilo',
                  preco:50.50,
                  createdAt: new Date(),
                  updatedAt: new Date()
              },
              {
                id: 100200,
                nome_produto: 'Cerveja Skoll',
                descricao: 'Cerveja skoll 600ml',
                preco:5.45,
                createdAt: new Date(),
                updatedAt: new Date()
              },
              {
                id: 100300,
                nome_produto: 'Suco de uva',
                descricao: 'Suco de uva 300ml',
                preco:4.50,
                createdAt: new Date(),
                updatedAt: new Date()
              },
      ], {})
    },
  
    down: (queryInterface, Sequelize) => {
          return queryInterface.bulkDelete('produtos', null, {})
    }
  }
  