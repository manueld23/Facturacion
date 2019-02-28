'use strict';
module.exports = (sequelize, DataTypes) => {
  const GNom12Emi = sequelize.define('GNom12Emi', {
    idGNom12Emi: DataTypes.INTEGER,
    DNEcurp: DataTypes.STRING,
    DNErPatronal: DataTypes.STRING,
    DNEpOrigen: DataTypes.STRING
  }, {});
  GNom12Emi.associate = function(models) {
    // associations can be defined here
  };
  return GNom12Emi;
};