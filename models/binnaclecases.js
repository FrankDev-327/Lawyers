'use strict';
module.exports = (sequelize, DataTypes) => {
  const BinnacleCases = sequelize.define('BinnacleCases', {
    comments: DataTypes.STRING,
    caseId: DataTypes.INTEGER,
  }, {});
  BinnacleCases.associate = function(models) {
    // associations can be defined here
  };
  return BinnacleCases;
};