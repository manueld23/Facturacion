'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gcfdi33Conceptos = sequelize.define('Gcfdi33Conceptos', {
    idGcfdi33Conceptos: DataTypes.INTEGER,
    DCimporte: DataTypes.INTEGER,
    DCbuscProduct: DataTypes.STRING,
    DCnumIdent: DataTypes.STRING,
    DCdescrip: DataTypes.STRING,
    DCclave: DataTypes.STRING,
    DCcantidad: DataTypes.INTEGER,
    DCdescrip2: DataTypes.STRING,
    DCunidad: DataTypes.INTEGER,
    DCvalUnitario: DataTypes.INTEGER,
    DCclavUnidad: DataTypes.STRING,
    DCimporte2: DataTypes.INTEGER,
    DCdescrip3: DataTypes.STRING,
    DCporcDesc: DataTypes.INTEGER,
    DCdesc: DataTypes.INTEGER
  }, {});
  Gcfdi33Conceptos.associate = function(models) {
    // associations can be defined here
  };
  return Gcfdi33Conceptos;
};