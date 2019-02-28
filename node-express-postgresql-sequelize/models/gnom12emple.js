'use strict';
module.exports = (sequelize, DataTypes) => {
  const GNom12Emple = sequelize.define('GNom12Emple', {
    idGNom12Emple: DataTypes.INTEGER,
    DNEmBusEmp: DataTypes.STRING,
    DNEmRfc: DataTypes.STRING,
    DNEmNombre: DataTypes.STRING,
    DNEmUcfdi: DataTypes.STRING,
    DNEmNempleado: DataTypes.STRING,
    DNEmCurp: DataTypes.STRING,
    DNEmtNomina: DataTypes.STRING,
    DNEmPPago: DataTypes.STRING,
    DNEmEFedera: DataTypes.STRING,
    DNEmtContra: DataTypes.STRING,
    DNEmTRegimen: DataTypes.STRING,
    DNEmNss: DataTypes.STRING,
    DNEmSBase: DataTypes.INTEGER,
    DNEmRPuesto: DataTypes.STRING,
    DNEmSDiario: DataTypes.INTEGER,
    DNEmTJorna: DataTypes.STRING,
    DNEmDeparta: DataTypes.STRING,
    DNEmPuesto: DataTypes.STRING,
    DNEmSindica: DataTypes.STRING,
    DNEmCBancaria: DataTypes.INTEGER,
    DNEmBanco: DataTypes.STRING,
    DNEmFechLabo: DataTypes.STRING,
    DNEmFechIniPag: DataTypes.STRING,
    DNEmFechFinPag: DataTypes.STRING,
    DNEmFechPag: DataTypes.STRING,
    DNEmDPagad: DataTypes.STRING,
    DNEmAnti: DataTypes.STRING
  }, {});
  GNom12Emple.associate = function(models) {
    // associations can be defined here
  };
  return GNom12Emple;
};