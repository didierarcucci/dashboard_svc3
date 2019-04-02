'use strict';
module.exports = (sequelize, DataTypes) => {
  const ComponentBreakdown = sequelize.define('ComponentBreakdown', {
    componentId: DataTypes.INTEGER,
    phaseId: DataTypes.INTEGER,
    hours: DataTypes.NUMERIC
  }, {});
  ComponentBreakdown.associate = function(models) {
    // associations can be defined here
    ComponentBreakdown.belongsTo(models.LookupValue, {
      foreignKey: 'phaseId',
      as: 'phase'
    })
  };
  return ComponentBreakdown;
};