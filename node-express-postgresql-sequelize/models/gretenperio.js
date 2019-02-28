'use strict';
module.exports = (sequelize, DataTypes) => {
  const GRetenPerio = sequelize.define('GRetenPerio', {
    idGRetenPerio: DataTypes.INTEGER,
    DRPeFiscal: DataTypes.STRING,
    DRPmInicial: DataTypes.STRING,
    DRPmFinal: DataTypes.STRING
  }, {});
  GRetenPerio.associate = function(models) {
    // associations can be defined here
  };
  return GRetenPerio;
};