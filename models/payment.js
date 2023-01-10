'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payment.belongsTo(models.User,{foreignKey: 'userId'})
      Payment.belongsTo(models.Item, {foreignKey: 'itemId'})
    }
  }
  Payment.init({
    userId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
    orderId: DataTypes.STRING,
    isPayment:DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};