'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CEmpTots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCEmpTot: {
        type: Sequelize.INTEGER
      },
      CETtPercep: {
        type: Sequelize.INTEGER
      },
      CETtDeducc: {
        type: Sequelize.INTEGER
      },
      CETtPagos: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CEmpTots');
  }
};