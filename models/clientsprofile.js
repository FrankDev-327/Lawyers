'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClientsProfile = sequelize.define('ClientsProfile', {
    clientId: DataTypes.INTEGER,
    clientPhoto: DataTypes.STRING
  }, {});
  ClientsProfile.associate = function(models) {
    // associations can be defined here
  };
  return ClientsProfile;
};