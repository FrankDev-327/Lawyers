'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameClient: {
        type: Sequelize.STRING
      },
      lastNameClient: {
        type: Sequelize.STRING
      },
      cellphoneClient: {
        type: Sequelize.STRING
      },
      emailClient: {
        type: Sequelize.STRING
      },
      passwordClient: {
        type: Sequelize.STRING
      },
      identiferClient:{
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Clients');
  }
};