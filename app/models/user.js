'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Feedback, {
        foreignKey: 'user_id'
      }),
      User.hasMany(models.UserAnswer, {
        foreignKey: 'user_id'
      })
      User.hasMany(models.Enrollment, {
        foreignKey: 'user_id'
      })
      User.hasMany(models.Classes, {
        foreignKey: 'user_id'
      })
    }
  }
  User.init({
    username: DataTypes.STRING,
    nim: {
      type: DataTypes.STRING,
      unique: true
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    photo: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};