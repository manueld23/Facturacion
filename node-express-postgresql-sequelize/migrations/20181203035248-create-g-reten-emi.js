'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GRetenEmis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idGRetenEmi: {
        type: Sequelize.INTEGER
      },
      DRErfc: {
        type: Sequelize.STRING
      },
      DREsucursal: {
        type: Sequelize.STRING
      },
      DRErSocial: {
        type: Sequelize.STRING
      },
      DREfolio: {
        type: Sequelize.STRING
      },
      DREtReten: {
        type: Sequelize.STRING
      },
      DREfech: {
        type: Sequelize.STRING
      },
      DREcReten: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GRetenEmis');
  }
};