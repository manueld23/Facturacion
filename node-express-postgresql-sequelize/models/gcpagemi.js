'use strict';
module.exports = (sequelize, DataTypes) => {
  const GCPagEmi = sequelize.define('GCPagEmi', {
    idGCPagEmi: DataTypes.INTEGER,
    DPErfc: DataTypes.STRING,
    DPEsucur: DataTypes.STRING,
    DPErSocial: DataTypes.STRING,
    DPEserie: DataTypes.STRING,
    DPEtDoc: DataTypes.STRING,
    DPEtComp: DataTypes.STRING,
    DPEfolio: DataTypes.INTEGER,
    DPEtitComp: DataTypes.STRING,
    DPEfech: DataTypes.STRING,
    DPElExpe: DataTypes.INTEGER,
    DPErFiscal: DataTypes.STRING,
    DPEmoneda: DataTypes.STRING,
    DPEconfir: DataTypes.STRING
  }, {});
  GCPagEmi.associate = function(models) {
    // associations can be defined here
  };
  return GCPagEmi;
};