'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Classes.hasMany(models.Enrollment, {
        foreignKey:"class_id"
      })
      Classes.hasMany(models.Assignment, {
        foreignKey:"class_id"
      })
      Classes.hasMany(models.Lessons, {
        foreignKey:"class_id"
      })
      Classes.belongsTo(models.User, {
        foreignKey:"user_id"
      })
      Classes.belongsTo(models.Course, {
        foreignKey:"course_id"
      })
      Classes.hasMany(models.Test, {
        foreignKey:"class_id"
      })
    }
  }
  Classes.init({
    user_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER,
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    tahun_ajaran: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'inactive'],
      defaultValue: 'active'
    },
  }, {
    sequelize,
    modelName: 'Classes',
  });
  return Classes;
};