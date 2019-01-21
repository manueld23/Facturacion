'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CProdNPros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCProdNPro: {
        type: Sequelize.INTEGER
      },
      CPNPdPro: {
        type: Sequelize.STRING
      },
      CPNPdUni: {
        type: Sequelize.STRING
      },
      CPNPserv: {
        type: Sequelize.STRING
      },
      CPNPcUni: {
        type: Sequelize.STRING
      },
      CPNPdesc: {
        type: Sequelize.STRING
      },
      CPNPvUni: {
        type: Sequelize.INTEGER
      },
      CPNPnIden: {
        type: Sequelize.INTEGER
      },
      CPNPunidad: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('CProdNPros');
  }
};