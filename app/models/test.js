'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Test.belongsTo(models.Classes, {
        foreignKey: 'class_id'
      }),
      Test.hasMany(models.UserAnswer, {
        foreignKey: 'test_id'
      }),
      Test.hasMany(models.Question, {
        foreignKey: 'test_id'
      })
    }
  }
  Test.init({
    class_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    time: DataTypes.TIME,
    availableFrom: DataTypes.DATE,
    availableTo: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Test',
  });
  return Test;
};