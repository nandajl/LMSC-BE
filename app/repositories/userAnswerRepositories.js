const { UserAnswer, User, Test, Question } = require('../models');

module.exports = {
  create(body) {
    return UserAnswer.create(body);
  },

  massCreate(body) {
    return UserAnswer.bulkCreate(body);
  },

  getAllUserAnswer(){
    return UserAnswer.findAll();
  },

  findAllUserAnswer(condition){
    return UserAnswer.findAll({
      include: [
        {model: User},
        {model: Test},
        {model: Question}
      ],
      where: condition
    })
  }
}