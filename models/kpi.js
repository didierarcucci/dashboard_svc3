'use strict';
module.exports = (sequelize, DataTypes) => {
  const KPIView = sequelize.define('KPIView', {
    entryMonth: DataTypes.DATE,
    projectHours: DataTypes.DECIMAL(10,2),
    activeProjects: DataTypes.INTEGER,
    activeResources: DataTypes.INTEGER,
    avgBillRate: DataTypes.DECIMAL(10,2)
  }, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    id: false
  });

  KPIView.associate = function(models) {
    // associations can be defined here
  };
  
  KPIView.removeAttribute('id');

  return KPIView;
};