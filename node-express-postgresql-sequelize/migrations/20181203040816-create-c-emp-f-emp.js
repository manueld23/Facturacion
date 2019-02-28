'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CEmpFEmps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCEmpFEmp: {
        type: Sequelize.INTEGER
      },
      CEFErfc: {
        type: Sequelize.STRING
      },
      CEFEnombre: {
        type: Sequelize.STRING
      },
      CEFEnumEmp: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CEmpFEmps');
  }
};