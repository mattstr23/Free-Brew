'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Beers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Beers.init({
    userName: DataTypes.STRING,
    beerName: DataTypes.STRING,
    beerTyper: DataTypes.STRING,
    maker: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Beers',
  });
  return Beers;
};