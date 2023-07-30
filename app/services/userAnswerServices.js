const userAnswerRepositories = require("../repositories/userAnswerRepositories");

module.exports = {
  massCreate(body) {
    return userAnswerRepositories.massCreate(body);
  },

  getAllUserAnswer() {
    return userAnswerRepositories.getAllUserAnswer();
  },

  findAllUserAnswer(condition){
    const {user_id, test_id} = condition;
    if (test_id) {
      return userAnswerRepositories.findAllUserAnswer({test_id: test_id});
    }
    return userAnswerRepositories.findAllUserAnswer({user_id: user_id});  
  }
}