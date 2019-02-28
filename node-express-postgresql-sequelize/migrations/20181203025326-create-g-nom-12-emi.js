'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GNom12Emis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idGNom12Emi: {
        type: Sequelize.INTEGER
      },
      DNEcurp: {
        type: Sequelize.STRING
      },
      DNErPatronal: {
        type: Sequelize.STRING
      },
      DNEpOrigen: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GNom12Emis');
  }
};