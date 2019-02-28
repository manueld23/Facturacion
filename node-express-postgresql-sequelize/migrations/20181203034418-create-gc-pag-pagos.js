'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GCPagPagos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idGCPagPagos: {
        type: Sequelize.INTEGER
      },
      DPPfecPago: {
        type: Sequelize.STRING
      },
      DPPformPago: {
        type: Sequelize.STRING
      },
      DPPmPago: {
        type: Sequelize.STRING
      },
      DPPmonto: {
        type: Sequelize.INTEGER
      },
      DPPnOper: {
        type: Sequelize.INTEGER
      },
      DPPtCamb: {
        type: Sequelize.INTEGER
      },
      DPPeCOrde: {
        type: Sequelize.STRING
      },
      DPPbOrde: {
        type: Sequelize.STRING
      },
      DPPcOrde: {
        type: Sequelize.INTEGER
      },
      DPPeCDest: {
        type: Sequelize.STRING
      },
      DPPcBene: {
        type: Sequelize.INTEGER
      },
      DPPcPago: {
        type: Sequelize.STRING
      },
      DPPcertPago: {
        type: Sequelize.STRING
      },
      DPPcadOriPag: {
        type: Sequelize.STRING
      },
      DPPseDigi: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GCPagPagos');
  }
};