'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.hasMany(models.Enrollment, {
        foreignKey:"course_id"
      })
      Course.hasMany(models.Assignment, {
        foreignKey:"course_id"
      })
      Course.hasMany(models.Lessons, {
        foreignKey:"course_id"
      })
      Course.belongsTo(models.User, {
        foreignKey:"user_id"
      })
    }
  }
  Course.init({
    user_id: DataTypes.INTEGER,
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};