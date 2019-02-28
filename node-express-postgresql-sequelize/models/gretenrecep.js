'use strict';
module.exports = (sequelize, DataTypes) => {
  const GRetenRecep = sequelize.define('GRetenRecep', {
    idGRetenRecep: DataTypes.INTEGER,
    DREnacio: DataTypes.STRING,
    DREbCliente: DataTypes.STRING
  }, {});
  GRetenRecep.associate = function(models) {
    // associations can be defined here
  };
  return GRetenRecep;
};