'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('lists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hdid: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      sdt: {
        type: Sequelize.STRING
      }, 
      dvid: {
        type: Sequelize.STRING
      },    
      listdevice: {
        type: Sequelize.STRING
      }, 
      error: {
        type: Sequelize.STRING
      },      
      phutrach: {
        type: Sequelize.STRING
      },
      ngaynhan: {
        type: Sequelize.DATE
      },
      ngaysua: {   
        type: Sequelize.DATE
      },
      // songaydasua: {      
      //   type: Sequelize.STRING
      // },
      ngaybaohanh: {  
        type: Sequelize.DATE
      },
      phithanhtoan :
      {
        type : Sequelize.INTEGER
      },
      thanhtoan :
      {
        type : Sequelize.STRING
      },
      note :
      {
        type : Sequelize.STRING
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
    await queryInterface.dropTable('lists');
  }
};
    // hdid: DataTypes.INTEGER,
    // name: DataTypes.STRING,
    // sdt: DataTypes.STRING,
    // dvid: DataTypes.STRING,
    // listdevice: DataTypes.STRING,
    // error: DataTypes.STRING,
    // phutrach: DataTypes.STRING,
    // ngaynhan: DataTypes.DATE,
    // ngaysua: DataTypes.DATE,
    // songaydasua : DataTypes.INTEGER,
    // ngaybaohanh : DataTypes.DATE,
    // phithanhtoan: DataTypes.STRING,
    // thanhtoan: DataTypes.BOOLEAN,
    // note: DataTypes.STRING,