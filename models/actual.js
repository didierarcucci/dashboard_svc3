'use strict';
module.exports = (sequelize, DataTypes) => {
  const ActualsView = sequelize.define('ActualsView', {
    resourceName: DataTypes.STRING,
    projectName: DataTypes.STRING,
    taskName: DataTypes.STRING,
    payClass: DataTypes.STRING,
    payCode: DataTypes.STRING,
    weekStart: DataTypes.DATE,
    weekDay: DataTypes.STRING,
    day: DataTypes.DATE,
    entryHours: DataTypes.DECIMAL(10,2)
  }, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    id: false
  });

  ActualsView.associate = function(models) {
    // associations can be defined here
  };
  
  ActualsView.removeAttribute('id');

  return ActualsView;
};