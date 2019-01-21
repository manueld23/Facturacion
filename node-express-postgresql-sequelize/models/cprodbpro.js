'use strict';
module.exports = (sequelize, DataTypes) => {
  const CProdBPro = sequelize.define('CProdBPro', {
    idCProdBPro: DataTypes.INTEGER,
    CPBPnIden: DataTypes.INTEGER,
    CPBPdescrip: DataTypes.STRING
  }, {});
  CProdBPro.associate = function(models) {
    // associations can be defined here
  };
  return CProdBPro;
};