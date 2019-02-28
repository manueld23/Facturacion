'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Gcfdi33FPagos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idGcfdi33FPago: {
        type: Sequelize.INTEGER
      },
      DFPmoneda: {
        type: Sequelize.STRING
      },
      DFPformPago: {
        type: Sequelize.STRING
      },
      DFPcondPago: {
        type: Sequelize.STRING
      },
      DFPtipCambio: {
        type: Sequelize.STRING
      },
      DFPmetPago: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Gcfdi33FPagos');
  }
};