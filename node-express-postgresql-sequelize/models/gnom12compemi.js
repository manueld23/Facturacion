'use strict';
module.exports = (sequelize, DataTypes) => {
  const GNom12CompEmi = sequelize.define('GNom12CompEmi', {
    idGnom12CompEmi: DataTypes.INTEGER,
    DNrfc: DataTypes.STRING,
    DNsucursal: DataTypes.STRING,
    DNrzSocail: DataTypes.STRING,
    DNserie: DataTypes.STRING,
    DNtipDoc: DataTypes.STRING,
    DNtipComp: DataTypes.STRING,
    DNfolio: DataTypes.STRING,
    DNtitComprob: DataTypes.STRING,
    DNfecha: DataTypes.STRING,
    DNformPago: DataTypes.STRING,
    DNmetPago: DataTypes.STRING,
    DNmoneda: DataTypes.STRING,
    DNlugExpe: DataTypes.STRING,
    DNregFiscal: DataTypes.STRING,
    DNconfirmac: DataTypes.STRING
  }, {});
  GNom12CompEmi.associate = function(models) {
    // associations can be defined here
  };
  return GNom12CompEmi;
};