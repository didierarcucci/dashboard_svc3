'use strict';
module.exports = (sequelize, DataTypes) => {
  const LookupValue = sequelize.define('LookupValue', {
    lookupId: DataTypes.INTEGER,
    code: DataTypes.STRING,
    value: DataTypes.STRING
  }, {});
  LookupValue.associate = function(models) {
    // associations can be defined here
  };
  return LookupValue;
};