'use strict';
module.exports = (sequelize, DataTypes) => {
  const Resource = sequelize.define('Resource', {
    resourceName: DataTypes.STRING,
    team: DataTypes.STRING,
    organization: DataTypes.STRING,
    resourceType: DataTypes.STRING,
    role: DataTypes.STRING,
    techStack: DataTypes.STRING,
    billRate: DataTypes.DECIMAL(10,2),
    location: DataTypes.STRING,
    capitalizationRatio: DataTypes.DECIMAL(10,2),
    budgetedFlag: DataTypes.BOOLEAN,
    loadHoursFlag: DataTypes.BOOLEAN,
    activeFlag: DataTypes.BOOLEAN,
    startDateActive: DataTypes.DATE,
    endDateActive: DataTypes.DATE
  }, {});
  Resource.associate = function(models) {
    // associations can be defined here
  };
  return Resource;
};