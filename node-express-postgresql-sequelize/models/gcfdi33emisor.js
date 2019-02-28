'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gcfdi33Emisor = sequelize.define('Gcfdi33Emisor', {
    idGcfdi33Emisor: DataTypes.INTEGER,
    DErfc: DataTypes.STRING,
    DEsucursal: DataTypes.STRING,
    DErsocial: DataTypes.STRING,
    DEserie: DataTypes.STRING,
    DEtDoc: DataTypes.STRING,
    DEtComprob: DataTypes.STRING,
    DEfolio: DataTypes.STRING,
    DEtituComprob: DataTypes.STRING,
    DEfecha: DataTypes.STRING,
    DElugExpedic: DataTypes.STRING,
    DEregFiscal: DataTypes.STRING,
    DEconfirm: DataTypes.STRING
  }, {});
  Gcfdi33Emisor.associate = function(models) {
    // associations can be defined here
  };
  return Gcfdi33Emisor;
};