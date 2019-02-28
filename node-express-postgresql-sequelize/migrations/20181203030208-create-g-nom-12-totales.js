'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GNom12Totales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idGNom12Totales: {
        type: Sequelize.INTEGER
      },
      DNTtPercep: {
        type: Sequelize.INTEGER
      },
      DNTtDeducc: {
        type: Sequelize.INTEGER
      },
      DNTtOPagos: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GNom12Totales');
  }
};