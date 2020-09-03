'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clients = sequelize.define('Clients', {
    nameClient: DataTypes.STRING,
    lastNameClient: DataTypes.STRING,
    cellphoneClient: DataTypes.STRING,
    emailClient: DataTypes.STRING,
    passwordClient: DataTypes.STRING,
    type:DataTypes.STRING,
  }, {});
  Clients.associate = function(models) {
    // associations can be defined here
  };
  return Clients;
};