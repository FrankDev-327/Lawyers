'use strict';
module.exports = (sequelize, DataTypes) => {
  const LawyerProfile = sequelize.define('LawyerProfile', {
    lawyerId: DataTypes.INTEGER,
    lawyer_photo: DataTypes.STRING
  }, {});
  LawyerProfile.associate = function(models) {
    // associations can be defined here
  };
  return LawyerProfile;
};