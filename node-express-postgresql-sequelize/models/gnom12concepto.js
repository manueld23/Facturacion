'use strict';
module.exports = (sequelize, DataTypes) => {
  const GNom12Concepto = sequelize.define('GNom12Concepto', {
    idGNom12Concepto: DataTypes.INTEGER,
    DNCclave: DataTypes.INTEGER,
    DNCcantidad: DataTypes.INTEGER,
    DNCdescrip: DataTypes.INTEGER,
    DNCcUnidad: DataTypes.STRING,
    DNCvUnitari: DataTypes.INTEGER,
    DNCimporte: DataTypes.INTEGER,
    DNCdesc: DataTypes.INTEGER
  }, {});
  GNom12Concepto.associate = function(models) {
    // associations can be defined here
  };
  return GNom12Concepto;
};