'use strict';
module.exports = (sequelize, DataTypes) => {
  const CEmpFEmp = sequelize.define('CEmpFEmp', {
    idCEmpFEmp: DataTypes.INTEGER,
    CEFErfc: DataTypes.STRING,
    CEFEnombre: DataTypes.STRING,
    CEFEnumEmp: DataTypes.INTEGER
  }, {});
  CEmpFEmp.associate = function(models) {
    // associations can be defined here
  };
  return CEmpFEmp;
};