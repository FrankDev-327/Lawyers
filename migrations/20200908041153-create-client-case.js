'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ClientCases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameClient: {
        type: Sequelize.STRING
      },
      identiferClient: {
        type: Sequelize.STRING
      },
      speciality: {
        type: Sequelize.STRING
      },
      subjects: {
        type: Sequelize.STRING
      },
      lawyerId:{
        type: Sequelize.INTEGER
      },
      status:{
        type: Sequelize.BOOLEAN
      },
      cellphone: {
        type: Sequelize.STRING
      },
      email: {
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
    return queryInterface.dropTable('ClientCases');
  }
};