'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GCPagEmis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idGCPagEmi: {
        type: Sequelize.INTEGER
      },
      DPErfc: {
        type: Sequelize.STRING
      },
      DPEsucur: {
        type: Sequelize.STRING
      },
      DPErSocial: {
        type: Sequelize.STRING
      },
      DPEserie: {
        type: Sequelize.STRING
      },
      DPEtDoc: {
        type: Sequelize.STRING
      },
      DPEtComp: {
        type: Sequelize.STRING
      },
      DPEfolio: {
        type: Sequelize.INTEGER
      },
      DPEtitComp: {
        type: Sequelize.STRING
      },
      DPEfech: {
        type: Sequelize.STRING
      },
      DPElExpe: {
        type: Sequelize.INTEGER
      },
      DPErFiscal: {
        type: Sequelize.STRING
      },
      DPEmoneda: {
        type: Sequelize.STRING
      },
      DPEconfir: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GCPagEmis');
  }
};