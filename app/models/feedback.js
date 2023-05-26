'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Feedback.belongsTo(models.User, {
        foreignKey: 'user_id',
      }),
      Feedback.belongsTo(models.FeedbackCat, {
        foreignKey: 'feedbackCat_id',
      })
    }
  }
  Feedback.init({
    user_id: DataTypes.INTEGER,
    feedbackCat_id: DataTypes.INTEGER,
    nilai: DataTypes.INTEGER,
    message: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Feedback',
  });
  return Feedback;
};