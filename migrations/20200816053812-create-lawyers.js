'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Lawyers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      cellphohe: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      idCategory: {
        type: Sequelize.JSON
      },
      address: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.STRING
      },
      resume: {
        type: Sequelize.BLOB
      },
      type: {
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
    return queryInterface.dropTable('Lawyers');
  }
};