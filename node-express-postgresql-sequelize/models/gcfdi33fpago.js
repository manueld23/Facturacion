'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gcfdi33FPago = sequelize.define('Gcfdi33FPago', {
    idGcfdi33FPago: DataTypes.INTEGER,
    DFPmoneda: DataTypes.STRING,
    DFPformPago: DataTypes.STRING,
    DFPcondPago: DataTypes.STRING,
    DFPtipCambio: DataTypes.STRING,
    DFPmetPago: DataTypes.STRING
  }, {});
  Gcfdi33FPago.associate = function(models) {
    // associations can be defined here
  };
  return Gcfdi33FPago;
};