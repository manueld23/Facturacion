'use strict';
module.exports = (sequelize, DataTypes) => {
  const GCPagPagos = sequelize.define('GCPagPagos', {
    idGCPagPagos: DataTypes.INTEGER,
    DPPfecPago: DataTypes.STRING,
    DPPformPago: DataTypes.STRING,
    DPPmPago: DataTypes.STRING,
    DPPmonto: DataTypes.INTEGER,
    DPPnOper: DataTypes.INTEGER,
    DPPtCamb: DataTypes.INTEGER,
    DPPeCOrde: DataTypes.STRING,
    DPPbOrde: DataTypes.STRING,
    DPPcOrde: DataTypes.INTEGER,
    DPPeCDest: DataTypes.STRING,
    DPPcBene: DataTypes.INTEGER,
    DPPcPago: DataTypes.STRING,
    DPPcertPago: DataTypes.STRING,
    DPPcadOriPag: DataTypes.STRING,
    DPPseDigi: DataTypes.STRING
  }, {});
  GCPagPagos.associate = function(models) {
    // associations can be defined here
  };
  return GCPagPagos;
};