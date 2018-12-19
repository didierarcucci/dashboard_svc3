'use strict';
module.exports = (sequelize, DataTypes) => {
  const Estimate = sequelize.define('Estimate', {
    name: DataTypes.STRING,
    inScope: DataTypes.TEXT,
    outOfScope: DataTypes.TEXT,
    assumptions: DataTypes.TEXT,
    version: DataTypes.DECIMAL(3,1),
    active: DataTypes.BOOLEAN
  }, {});
  Estimate.associate = function(models) {
    // associations can be defined here
  };
  return Estimate;
};