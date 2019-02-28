'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GCPagTotals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idGCPagTotal: {
        type: Sequelize.INTEGER
      },
      DPTimpLet: {
        type: Sequelize.STRING
      },
      DPTsubtotal: {
        type: Sequelize.INTEGER
      },
      DPTtotal: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GCPagTotals');
  }
};