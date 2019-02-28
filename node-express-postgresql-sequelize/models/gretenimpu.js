'use strict';
module.exports = (sequelize, DataTypes) => {
  const GRetenImpu = sequelize.define('GRetenImpu', {
    idGRetenImpu: DataTypes.INTEGER,
    DRIbReten: DataTypes.INTEGER,
    DRItImpu: DataTypes.STRING,
    DRImReten: DataTypes.INTEGER
  }, {});
  GRetenImpu.associate = function(models) {
    // associations can be defined here
  };
  return GRetenImpu;
};