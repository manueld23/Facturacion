'use strict';
module.exports = (sequelize, DataTypes) => {
  const CProdNPro = sequelize.define('CProdNPro', {
    idCProdNPro: DataTypes.INTEGER,
    CPNPdPro: DataTypes.STRING,
    CPNPdUni: DataTypes.STRING,
    CPNPserv: DataTypes.STRING,
    CPNPcUni: DataTypes.STRING,
    CPNPdesc: DataTypes.STRING,
    CPNPvUni: DataTypes.INTEGER,
    CPNPnIden: DataTypes.INTEGER,
    CPNPunidad: DataTypes.STRING
  }, {});
  CProdNPro.associate = function(models) {
    // associations can be defined here
  };
  return CProdNPro;
};