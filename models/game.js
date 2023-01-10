'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Game.hasMany(models.Item,{foreignKey: 'gameId'})
    }
  }
  Game.init({
    name: DataTypes.STRING,
    logoUrl: DataTypes.TEXT,
    backgroundCardUrl: DataTypes.TEXT,
    bannerUrl: DataTypes.TEXT,
    description: DataTypes.TEXT,
    status:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};