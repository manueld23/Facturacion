'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GRetenImpus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idGRetenImpu: {
        type: Sequelize.INTEGER
      },
      DRIbReten: {
        type: Sequelize.INTEGER
      },
      DRItImpu: {
        type: Sequelize.STRING
      },
      DRImReten: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GRetenImpus');
  }
};