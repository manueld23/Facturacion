'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CEmpEmpls', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCEmpEmpl: {
        type: Sequelize.INTEGER
      },
      CEEmpRfc: {
        type: Sequelize.STRING
      },
      CEEmpNomEm: {
        type: Sequelize.STRING
      },
      CEEmpEmail: {
        type: Sequelize.STRING
      },
      CEEmpNEmp: {
        type: Sequelize.INTEGER
      },
      CEEmpCurp: {
        type: Sequelize.STRING
      },
      CEEmpTNom: {
        type: Sequelize.STRING
      },
      CEEmpPPago: {
        type: Sequelize.STRING
      },
      CEEmpEFede: {
        type: Sequelize.STRING
      },
      CEEmpTContr: {
        type: Sequelize.STRING
      },
      CEEmpTRegi: {
        type: Sequelize.STRING
      },
      CEEmpNss: {
        type: Sequelize.INTEGER
      },
      CEEmpSCapor: {
        type: Sequelize.INTEGER
      },
      CEEmpRPues: {
        type: Sequelize.STRING
      },
      CEEmpSInte: {
        type: Sequelize.INTEGER
      },
      CEEmpTJorna: {
        type: Sequelize.STRING
      },
      CEEmpDepar: {
        type: Sequelize.STRING
      },
      CEEmpPuesto: {
        type: Sequelize.STRING
      },
      CEEmpSindica: {
        type: Sequelize.STRING
      },
      CEEmpCBanca: {
        type: Sequelize.INTEGER
      },
      CEEmpBanco: {
        type: Sequelize.STRING
      },
      CEEmpRLabo: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CEmpEmpls');
  }
};