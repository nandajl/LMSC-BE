const { UserAnswer } = require('../models');

module.exports = {
  create(body) {
    return UserAnswer.create(body);
  },

  massCreate(body) {
    return UserAnswer.bulkCreate(body);
  },

  getAllUserAnswer(){
    return UserAnswer.findAll();
  }
}