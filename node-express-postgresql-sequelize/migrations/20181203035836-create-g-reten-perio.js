'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GRetenPerios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idGRetenPerio: {
        type: Sequelize.INTEGER
      },
      DRPeFiscal: {
        type: Sequelize.STRING
      },
      DRPmInicial: {
        type: Sequelize.STRING
      },
      DRPmFinal: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GRetenPerios');
  }
};