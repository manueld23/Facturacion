'use strict';
module.exports = (sequelize, DataTypes) => {
  const GCPagRecep = sequelize.define('GCPagRecep', {
    idGCPagRecep: DataTypes.INTEGER,
    DPRbClient: DataTypes.STRING,
    DPRcliente: DataTypes.STRING,
    DPRrfc: DataTypes.STRING,
    DPRrSocial: DataTypes.STRING,
    DPRrFiscal: DataTypes.STRING,
    DPRnRegis: DataTypes.INTEGER,
    DPRuCfdi: DataTypes.STRING
  }, {});
  GCPagRecep.associate = function(models) {
    // associations can be defined here
  };
  return GCPagRecep;
};