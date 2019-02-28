'use strict';
module.exports = (sequelize, DataTypes) => {
  const GRetenEmi = sequelize.define('GRetenEmi', {
    idGRetenEmi: DataTypes.INTEGER,
    DRErfc: DataTypes.STRING,
    DREsucursal: DataTypes.STRING,
    DRErSocial: DataTypes.STRING,
    DREfolio: DataTypes.STRING,
    DREtReten: DataTypes.STRING,
    DREfech: DataTypes.STRING,
    DREcReten: DataTypes.STRING
  }, {});
  GRetenEmi.associate = function(models) {
    // associations can be defined here
  };
  return GRetenEmi;
};