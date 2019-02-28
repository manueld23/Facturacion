'use strict';
module.exports = (sequelize, DataTypes) => {
  const CEmpEmi = sequelize.define('CEmpEmi', {
    idCEmpEmi: DataTypes.INTEGER,
    CEEmiCurp: DataTypes.STRING,
    CEEmiRPatro: DataTypes.STRING,
    CEEmiPOri: DataTypes.STRING
  }, {});
  CEmpEmi.associate = function(models) {
    // associations can be defined here
  };
  return CEmpEmi;
};