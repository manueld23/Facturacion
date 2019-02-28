'use strict';
module.exports = (sequelize, DataTypes) => {
  const CEmpEmpl = sequelize.define('CEmpEmpl', {
    idCEmpEmpl: DataTypes.INTEGER,
    CEEmpRfc: DataTypes.STRING,
    CEEmpNomEm: DataTypes.STRING,
    CEEmpEmail: DataTypes.STRING,
    CEEmpNEmp: DataTypes.INTEGER,
    CEEmpCurp: DataTypes.STRING,
    CEEmpTNom: DataTypes.STRING,
    CEEmpPPago: DataTypes.STRING,
    CEEmpEFede: DataTypes.STRING,
    CEEmpTContr: DataTypes.STRING,
    CEEmpTRegi: DataTypes.STRING,
    CEEmpNss: DataTypes.INTEGER,
    CEEmpSCapor: DataTypes.INTEGER,
    CEEmpRPues: DataTypes.STRING,
    CEEmpSInte: DataTypes.INTEGER,
    CEEmpTJorna: DataTypes.STRING,
    CEEmpDepar: DataTypes.STRING,
    CEEmpPuesto: DataTypes.STRING,
    CEEmpSindica: DataTypes.STRING,
    CEEmpCBanca: DataTypes.INTEGER,
    CEEmpBanco: DataTypes.STRING,
    CEEmpRLabo: DataTypes.STRING
  }, {});
  CEmpEmpl.associate = function(models) {
    // associations can be defined here
  };
  return CEmpEmpl;
};