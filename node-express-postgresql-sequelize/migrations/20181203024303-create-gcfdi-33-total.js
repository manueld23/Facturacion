'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Gcfdi33Totals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idGcfdi33Total: {
        type: Sequelize.INTEGER
      },
      DTsubtotal: {
        type: Sequelize.INTEGER
      },
      DTdescTotal: {
        type: Sequelize.INTEGER
      },
      DTsubtGenerado: {
        type: Sequelize.INTEGER
      },
      DTtotal: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Gcfdi33Totals');
  }
};