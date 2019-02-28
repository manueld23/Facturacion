'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GNom12Conceptos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idGNom12Concepto: {
        type: Sequelize.INTEGER
      },
      DNCclave: {
        type: Sequelize.INTEGER
      },
      DNCcantidad: {
        type: Sequelize.INTEGER
      },
      DNCdescrip: {
        type: Sequelize.INTEGER
      },
      DNCcUnidad: {
        type: Sequelize.STRING
      },
      DNCvUnitari: {
        type: Sequelize.INTEGER
      },
      DNCimporte: {
        type: Sequelize.INTEGER
      },
      DNCdesc: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GNom12Conceptos');
  }
};