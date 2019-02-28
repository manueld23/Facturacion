'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GCPagConceps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idGCPagConcep: {
        type: Sequelize.INTEGER
      },
      DPCclave: {
        type: Sequelize.INTEGER
      },
      DPCcUnidad: {
        type: Sequelize.STRING
      },
      DPCcantidad: {
        type: Sequelize.INTEGER
      },
      DPCvUnitario: {
        type: Sequelize.INTEGER
      },
      DPCimporte: {
        type: Sequelize.INTEGER
      },
      DPCdescrip: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GCPagConceps');
  }
};