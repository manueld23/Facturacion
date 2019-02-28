'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GRetenReceps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idGRetenRecep: {
        type: Sequelize.INTEGER
      },
      DREnacio: {
        type: Sequelize.STRING
      },
      DREbCliente: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GRetenReceps');
  }
};