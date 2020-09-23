'use strict';
module.exports = (sequelize, DataTypes) => {
  const LawerCases = sequelize.define('LawerCases', {
    lawyerId: DataTypes.INTEGER,
    nameClient: DataTypes.STRING,
    identiferClient: DataTypes.STRING,
    speciality: DataTypes.STRING,
    email: DataTypes.STRING,
    cellphone: DataTypes.STRING,
    matters: DataTypes.STRING,
    stage: DataTypes.INTEGER
  }, {});
  LawerCases.associate = function(models) {
    // associations can be defined here
  };
  return LawerCases;
};