'use strict';

module.exports = {
    // Name: DataTypes.STRING,
    // email: DataTypes.STRING,
    // password: DataTypes.STRING,
    // address: DataTypes.STRING,
    // gender: DataTypes.BOOLEAN,
    // roleid :DataTypes.INTEGER
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      Name: 'AnhTu',
      email: 'tuak@gmail.com',
      password: '123',
      address: 'GL',
      gender:1,
      roleid:1,
      createdAt: new Date(),
      updatedAt: new Date ()
      
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
