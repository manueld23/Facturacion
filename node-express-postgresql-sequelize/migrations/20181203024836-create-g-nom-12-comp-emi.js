'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GNom12CompEmis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idGnom12CompEmi: {
        type: Sequelize.INTEGER
      },
      DNrfc: {
        type: Sequelize.STRING
      },
      DNsucursal: {
        type: Sequelize.STRING
      },
      DNrzSocail: {
        type: Sequelize.STRING
      },
      DNserie: {
        type: Sequelize.STRING
      },
      DNtipDoc: {
        type: Sequelize.STRING
      },
      DNtipComp: {
        type: Sequelize.STRING
      },
      DNfolio: {
        type: Sequelize.STRING
      },
      DNtitComprob: {
        type: Sequelize.STRING
      },
      DNfecha: {
        type: Sequelize.STRING
      },
      DNformPago: {
        type: Sequelize.STRING
      },
      DNmetPago: {
        type: Sequelize.STRING
      },
      DNmoneda: {
        type: Sequelize.STRING
      },
      DNlugExpe: {
        type: Sequelize.STRING
      },
      DNregFiscal: {
        type: Sequelize.STRING
      },
      DNconfirmac: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GNom12CompEmis');
  }
};