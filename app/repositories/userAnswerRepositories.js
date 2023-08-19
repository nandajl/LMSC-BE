const { UserAnswer, User, Test, Question, Answer } = require('../models');

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
        {model: Question, 
          include : [
            {model: Answer},
          ]
        },
        {model: Answer}
      ],
      where: condition
    })
  }
}