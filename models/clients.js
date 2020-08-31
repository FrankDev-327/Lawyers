'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clients = sequelize.define('Clients', {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    identifier: DataTypes.STRING,
    cellphone: DataTypes.STRING,
    email: DataTypes.STRING,
    cellphone_2: DataTypes.STRING,
    email_2: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Clients.associate = function (models) {
    // associations can be defined here
  };
  return Clients;
};