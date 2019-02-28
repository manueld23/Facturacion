'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GNom12Totals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idGNom12Total: {
        type: Sequelize.INTEGER
      },
      DNTimporLetra: {
        type: Sequelize.STRING
      },
      DNTsubtotal: {
        type: Sequelize.INTEGER
      },
      DNTdesTotal: {
        type: Sequelize.INTEGER
      },
      DNTsubGenera: {
        type: Sequelize.INTEGER
      },
      DNTtotal: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GNom12Totals');
  }
};