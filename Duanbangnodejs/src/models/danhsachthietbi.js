'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  lists.init({
    hdid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    sdt: DataTypes.STRING,
    dvid: DataTypes.STRING,
    listdevice: DataTypes.STRING,
    error: DataTypes.STRING,
    phutrach: DataTypes.STRING,
    ngaynhan: DataTypes.DATE,
    ngaysua: DataTypes.DATE,
    // songaydasua : DataTypes.INTEGER,
    ngaybaohanh : DataTypes.DATE,
    phithanhtoan: DataTypes.STRING,
    thanhtoan: DataTypes.STRING,
    note: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'lists',
  });
  return lists;
};