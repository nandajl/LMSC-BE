'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAnswer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserAnswer.belongsTo(models.User, {
        foreignKey: 'user_id'
      }),
      UserAnswer.belongsTo(models.Question, {
        foreignKey: 'question_id'
      }),
      UserAnswer.belongsTo(models.Test, {
        foreignKey: 'test_id'
      }),
      UserAnswer.belongsTo(models.Answer, {
        foreignKey: 'selected_answer_id'
      })
    }
  }
  UserAnswer.init({
    user_id: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER,
    test_id: DataTypes.INTEGER,
    selected_answer_id: DataTypes.INTEGER,
    user_answer: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'UserAnswer',
  });
  return UserAnswer;
};