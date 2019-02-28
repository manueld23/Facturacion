'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gcfdi33Total = sequelize.define('Gcfdi33Total', {
    idGcfdi33Total: DataTypes.INTEGER,
    DTsubtotal: DataTypes.INTEGER,
    DTdescTotal: DataTypes.INTEGER,
    DTsubtGenerado: DataTypes.INTEGER,
    DTtotal: DataTypes.INTEGER
  }, {});
  Gcfdi33Total.associate = function(models) {
    // associations can be defined here
  };
  return Gcfdi33Total;
};