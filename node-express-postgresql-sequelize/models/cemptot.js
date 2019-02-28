'use strict';
module.exports = (sequelize, DataTypes) => {
  const CEmpTot = sequelize.define('CEmpTot', {
    idCEmpTot: DataTypes.INTEGER,
    CETtPercep: DataTypes.INTEGER,
    CETtDeducc: DataTypes.INTEGER,
    CETtPagos: DataTypes.INTEGER
  }, {});
  CEmpTot.associate = function(models) {
    // associations can be defined here
  };
  return CEmpTot;
};