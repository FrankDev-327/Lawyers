'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    categoryName: DataTypes.STRING
  }, {});
  Categories.associate = function(models) {
    // associations can be defined here
  };
  return Categories;
};