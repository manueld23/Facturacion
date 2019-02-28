'use strict';
module.exports = (sequelize, DataTypes) => {
  const GCPagTotal = sequelize.define('GCPagTotal', {
    idGCPagTotal: DataTypes.INTEGER,
    DPTimpLet: DataTypes.STRING,
    DPTsubtotal: DataTypes.INTEGER,
    DPTtotal: DataTypes.INTEGER
  }, {});
  GCPagTotal.associate = function(models) {
    // associations can be defined here
  };
  return GCPagTotal;
};