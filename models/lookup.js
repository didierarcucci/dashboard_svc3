'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lookup = sequelize.define('Lookup', {
    code: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Lookup.associate = function(models) {
    // associations can be defined here
    Lookup.hasMany(models.LookupValue, {
      foreignKey: 'lookupId',
      as: 'lookupValues'
    });
  };
  return Lookup;
};