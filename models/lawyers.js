'use strict';

module.exports = (sequelize, DataTypes) => {
  const Lawyers = sequelize.define('Lawyers', {
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    cellphohe: DataTypes.STRING,
    email: DataTypes.STRING,
    idCategory: DataTypes.JSON,
    address: DataTypes.STRING,
    identify: DataTypes.STRING,
    password:DataTypes.STRING,
  }, {});
  Lawyers.associate = function (models) {
    // associations can be defined here
  };
  return Lawyers;
};