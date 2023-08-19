'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assignment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Assignment.belongsTo(models.Classes, {
        foreignKey:"class_id"
      })
    }
  }
  Assignment.init({
    class_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    content: DataTypes.TEXT,
    availableFrom: DataTypes.DATE,
    availableTo: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Assignment',
  });
  return Assignment;
};