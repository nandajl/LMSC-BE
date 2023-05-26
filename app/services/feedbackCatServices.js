const feedbackCatRepository = require("../repositories/feedbackCatRepository");

module.exports = {
  getAll() {
    return feedbackCatRepository.getAll();
  }
}