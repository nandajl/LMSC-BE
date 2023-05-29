const userAnswerRepositories = require("../repositories/userAnswerRepositories");

module.exports = {
  massCreate(body) {
    return userAnswerRepositories.massCreate(body);
  },

  getAllUserAnswer() {
    return userAnswerRepositories.getAllUserAnswer();
  }
}