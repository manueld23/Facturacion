'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gcfdi33Receptor = sequelize.define('Gcfdi33Receptor', {
    idGcfdi33Receptor: DataTypes.INTEGER,
    DRbusqCliente: DataTypes.STRING,
    DRcliente: DataTypes.STRING,
    DRrfc: DataTypes.STRING,
    DRrSocial: DataTypes.STRING,
    DRusoCfdi: DataTypes.STRING,
    DRresidenFiscal: DataTypes.STRING,
    DRnumRegistro: DataTypes.STRING
  }, {});
  Gcfdi33Receptor.associate = function(models) {
    // associations can be defined here
  };
  return Gcfdi33Receptor;
};