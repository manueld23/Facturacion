'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Gcfdi33Receptors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idGcfdi33Receptor: {
        type: Sequelize.INTEGER
      },
      DRbusqCliente: {
        type: Sequelize.STRING
      },
      DRcliente: {
        type: Sequelize.STRING
      },
      DRrfc: {
        type: Sequelize.STRING
      },
      DRrSocial: {
        type: Sequelize.STRING
      },
      DRusoCfdi: {
        type: Sequelize.STRING
      },
      DRresidenFiscal: {
        type: Sequelize.STRING
      },
      DRnumRegistro: {
        type: Sequelize.STRING
      },
      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Gcfdi33Receptors');
  }
};