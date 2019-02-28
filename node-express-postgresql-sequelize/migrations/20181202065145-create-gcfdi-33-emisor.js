'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Gcfdi33Emisors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idGcfdi33Emisor: {
        type: Sequelize.INTEGER
      },
      DErfc: {
        type: Sequelize.STRING
      },
      DEsucursal: {
        type: Sequelize.STRING
      },
      DErsocial: {
        type: Sequelize.STRING
      },
      DEserie: {
        type: Sequelize.STRING
      },
      DEtDoc: {
        type: Sequelize.STRING
      },
      DEtComprob: {
        type: Sequelize.STRING
      },
      DEfolio: {
        type: Sequelize.STRING
      },
      DEtituComprob: {
        type: Sequelize.STRING
      },
      DEfecha: {
        type: Sequelize.STRING
      },
      DElugExpedic: {
        type: Sequelize.STRING
      },
      DEregFiscal: {
        type: Sequelize.STRING
      },
      DEconfirm: {
        type: Sequelize.STRING
      },
      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Gcfdi33Emisors');
  }
};