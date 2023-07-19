'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lessons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Lessons.belongsTo(models.Course, {
        foreignKey:"course_id"
      })
      Lessons.hasMany(models.Test, {
        foreignKey:"lessons_id"
      })
    }
  }
  Lessons.init({
    course_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Lessons',
  });
  return Lessons;
};