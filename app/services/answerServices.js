const answerRepository = require("../repositories/answerRepository");

module.exports = {
  create(body) {
    return answerRepository.create(body);
  },

  update(body, id) {
    return answerRepository.update(body, id);
  },

  delete(id) {
    return answerRepository.delete(id);
  },

  getAllAnswer() {
    return answerRepository.getAllAnswer();
  },

  getAnswer(id) {
    return answerRepository.getAnswer(id);
  },

  massCreate(body) {
    return answerRepository.massCreate(body);
  }
}