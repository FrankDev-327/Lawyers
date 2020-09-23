'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClientCase = sequelize.define('ClientCase', {
    nameClient: DataTypes.STRING,
    lawyerId: DataTypes.INTEGER,
    identiferClient: DataTypes.STRING,
    speciality: DataTypes.STRING,
    email: DataTypes.STRING,
    cellphone: DataTypes.STRING,
    matters: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {});
  ClientCase.associate = function(models) {
    // associations can be defined here
  };
  return ClientCase;
};