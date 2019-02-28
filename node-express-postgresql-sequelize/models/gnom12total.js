'use strict';
module.exports = (sequelize, DataTypes) => {
  const GNom12Total = sequelize.define('GNom12Total', {
    idGNom12Total: DataTypes.INTEGER,
    DNTimporLetra: DataTypes.STRING,
    DNTsubtotal: DataTypes.INTEGER,
    DNTdesTotal: DataTypes.INTEGER,
    DNTsubGenera: DataTypes.INTEGER,
    DNTtotal: DataTypes.INTEGER
  }, {});
  GNom12Total.associate = function(models) {
    // associations can be defined here
  };
  return GNom12Total;
};