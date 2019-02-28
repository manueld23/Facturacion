'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Gcfdi33Conceptos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idGcfdi33Conceptos: {
        type: Sequelize.INTEGER
      },
      DCimporte: {
        type: Sequelize.INTEGER
      },
      DCbuscProduct: {
        type: Sequelize.STRING
      },
      DCnumIdent: {
        type: Sequelize.STRING
      },
      DCdescrip: {
        type: Sequelize.STRING
      },
      DCclave: {
        type: Sequelize.STRING
      },
      DCcantidad: {
        type: Sequelize.INTEGER
      },
      DCdescrip2: {
        type: Sequelize.STRING
      },
      DCunidad: {
        type: Sequelize.INTEGER
      },
      DCvalUnitario: {
        type: Sequelize.INTEGER
      },
      DCclavUnidad: {
        type: Sequelize.STRING
      },
      DCimporte2: {
        type: Sequelize.INTEGER
      },
      DCdescrip3: {
        type: Sequelize.STRING
      },
      DCporcDesc: {
        type: Sequelize.INTEGER
      },
      DCdesc: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Gcfdi33Conceptos');
  }
};