'use strict';
module.exports = (sequelize, DataTypes) => {
  const EstimateComponent = sequelize.define('EstimateComponent', {
    name: DataTypes.STRING,
    complexity: DataTypes.STRING,
    notes: DataTypes.TEXT
  }, {});

  EstimateComponent.associate = function(models) {
     //associations can be defined here
    EstimateComponent.belongsTo(models.Estimate, {as: 'estimate'});
    EstimateComponent.hasMany(models.ComponentBreakdown, {
      foreignKey: 'componentId',
      as: 'breakdown'});
  };


  return EstimateComponent;
};