'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Notification.belongsTo(models.User, {
        foreignKey: "user_id"
      }),
      Notification.belongsTo(models.Course, {
        foreignKey: "course_id"
      })
    }
  }
  Notification.init({
    user_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER,
    message: DataTypes.TEXT,
    is_read: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Notification',
  });
  return Notification;
};