'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CEmpEmis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCEmpEmi: {
        type: Sequelize.INTEGER
      },
      CEEmiCurp: {
        type: Sequelize.STRING
      },
      CEEmiRPatro: {
        type: Sequelize.STRING
      },
      CEEmiPOri: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CEmpEmis');
  }
};