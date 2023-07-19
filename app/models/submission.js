'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Submission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Submission.belongsTo(models.Assignment, {
        foreignKey:"assignment_id"
      })
      Submission.belongsTo(models.User, {
        foreignKey:"user_id"
      })
    }
  }
  Submission.init({
    assignment_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Submission',
  });
  return Submission;
};