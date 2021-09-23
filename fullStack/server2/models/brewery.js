'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brewery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Brewery.belongsTo(models.Register, {
        foreignKey: "name",
        onDelete: "CASCADE"
      });
      // define association here
    }
  };
  Brewery.init({
    name: DataTypes.STRING,
    breweryName: DataTypes.STRING,
    date: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Brewery',
  });
  return Brewery;
};