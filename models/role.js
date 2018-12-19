'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: DataTypes.STRING,
    team: DataTypes.STRING,
    billRate: DataTypes.DECIMAL(10,2),
    active: DataTypes.BOOLEAN,
    default: DataTypes.BOOLEAN,
    overhead: DataTypes.DECIMAL(10,2)
  }, {});
  Role.associate = function(models) {
    // associations can be defined here
  };
  return Role;
};