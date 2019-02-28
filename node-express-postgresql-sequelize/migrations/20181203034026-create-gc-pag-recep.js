'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GCPagReceps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idGCPagRecep: {
        type: Sequelize.INTEGER
      },
      DPRbClient: {
        type: Sequelize.STRING
      },
      DPRcliente: {
        type: Sequelize.STRING
      },
      DPRrfc: {
        type: Sequelize.STRING
      },
      DPRrSocial: {
        type: Sequelize.STRING
      },
      DPRrFiscal: {
        type: Sequelize.STRING
      },
      DPRnRegis: {
        type: Sequelize.INTEGER
      },
      DPRuCfdi: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GCPagReceps');
  }
};