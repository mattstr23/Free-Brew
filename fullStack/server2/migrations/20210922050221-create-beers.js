'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Beers', {
      id: {
        allowNull: false,
        autoIncrement: true,
    
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING
      },
      beerName: {
        primaryKey: true,
        type: Sequelize.STRING
      },
      beerTyper: {
        type: Sequelize.STRING
      },
      maker: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Beers');
  }
};