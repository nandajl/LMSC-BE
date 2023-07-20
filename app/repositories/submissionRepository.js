const { Submission, Assignment } = require("../models");

module.exports = {
  create(body) {
    return Submission.create(body);
  },
  update(body, id) {
    return Submission.update(body, { where: { id } });
  },
  delete(id) {
    return Submission.destroy({ where: { id } });
  },
  getSubmission(id) {
    return Submission.findByPk(id);
  },
  findSubmission(condition){
    console.log("condition : ", condition);
    return Submission.findAll({
      where: condition
    });
  }
}