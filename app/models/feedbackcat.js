'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FeedbackCat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FeedbackCat.hasMany(models.Feedback, {
        foreignKey: 'feedbackCat_id'
      })
    }
  }
  FeedbackCat.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FeedbackCat',
  });
  return FeedbackCat;
};