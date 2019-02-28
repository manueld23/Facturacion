'use strict';
module.exports = (sequelize, DataTypes) => {
  const GCPagConcep = sequelize.define('GCPagConcep', {
    idGCPagConcep: DataTypes.INTEGER,
    DPCclave: DataTypes.INTEGER,
    DPCcUnidad: DataTypes.STRING,
    DPCcantidad: DataTypes.INTEGER,
    DPCvUnitario: DataTypes.INTEGER,
    DPCimporte: DataTypes.INTEGER,
    DPCdescrip: DataTypes.STRING
  }, {});
  GCPagConcep.associate = function(models) {
    // associations can be defined here
  };
  return GCPagConcep;
};