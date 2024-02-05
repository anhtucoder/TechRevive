'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      sdt: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      listdevice: {
        type: Sequelize.STRING
      }, 
      error: {
        type: Sequelize.STRING
      },
      note: {
        type: Sequelize.STRING
      },
      hdid: {
        type: Sequelize.INTEGER
      },
      dvid: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};