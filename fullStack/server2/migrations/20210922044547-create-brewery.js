'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Breweries', {
      id: {
        allowNull: false,
        autoIncrement: true,
     
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        onDelete: "CASCADE",
        refereces: {
          model: "Register",
          key: "userName",
          as: "name"
        }

      },
      breweryName: {
        primaryKey: true,
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
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
    await queryInterface.dropTable('Breweries');
  }
};