'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GNom12Emples', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idGNom12Emple: {
        type: Sequelize.INTEGER
      },
      DNEmBusEmp: {
        type: Sequelize.STRING
      },
      DNEmRfc: {
        type: Sequelize.STRING
      },
      DNEmNombre: {
        type: Sequelize.STRING
      },
      DNEmUcfdi: {
        type: Sequelize.STRING
      },
      DNEmNempleado: {
        type: Sequelize.STRING
      },
      DNEmCurp: {
        type: Sequelize.STRING
      },
      DNEmtNomina: {
        type: Sequelize.STRING
      },
      DNEmPPago: {
        type: Sequelize.STRING
      },
      DNEmEFedera: {
        type: Sequelize.STRING
      },
      DNEmtContra: {
        type: Sequelize.STRING
      },
      DNEmTRegimen: {
        type: Sequelize.STRING
      },
      DNEmNss: {
        type: Sequelize.STRING
      },
      DNEmSBase: {
        type: Sequelize.INTEGER
      },
      DNEmRPuesto: {
        type: Sequelize.STRING
      },
      DNEmSDiario: {
        type: Sequelize.INTEGER
      },
      DNEmTJorna: {
        type: Sequelize.STRING
      },
      DNEmDeparta: {
        type: Sequelize.STRING
      },
      DNEmPuesto: {
        type: Sequelize.STRING
      },
      DNEmSindica: {
        type: Sequelize.STRING
      },
      DNEmCBancaria: {
        type: Sequelize.INTEGER
      },
      DNEmBanco: {
        type: Sequelize.STRING
      },
      DNEmFechLabo: {
        type: Sequelize.STRING
      },
      DNEmFechIniPag: {
        type: Sequelize.STRING
      },
      DNEmFechFinPag: {
        type: Sequelize.STRING
      },
      DNEmFechPag: {
        type: Sequelize.STRING
      },
      DNEmDPagad: {
        type: Sequelize.STRING
      },
      DNEmAnti: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GNom12Emples');
  }
};