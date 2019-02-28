'use strict';
module.exports = (sequelize, DataTypes) => {
  const GNom12Totales = sequelize.define('GNom12Totales', {
    idGNom12Totales: DataTypes.INTEGER,
    DNTtPercep: DataTypes.INTEGER,
    DNTtDeducc: DataTypes.INTEGER,
    DNTtOPagos: DataTypes.INTEGER
  }, {});
  GNom12Totales.associate = function(models) {
    // associations can be defined here
  };
  return GNom12Totales;
};