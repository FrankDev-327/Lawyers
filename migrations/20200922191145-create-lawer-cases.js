'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('LawerCases', {
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
      matters: {
        type: Sequelize.STRING
      },
      stage: {
        type: Sequelize.INTEGER
      },
      stagesName:{
        type: Sequelize.STRING
      },
      lawyerId: {
        type: Sequelize.INTEGER
      },
      cellphone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      statusCase: {
        type: Sequelize.BOOLEN
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
    return queryInterface.dropTable('LawerCases');
  }
};