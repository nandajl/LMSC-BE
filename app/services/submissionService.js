const submissionRepository = require("../repositories/submissionRepository");

module.exports = {
  create(body) {
    return submissionRepository.create(body);
  },
  update(body, id) {
    return submissionRepository.update(body, id);
  },
  delete(id) {
    return submissionRepository.delete(id);
  },
  getSubmission(id) {
    return submissionRepository.getSubmission(id);
  },
  findSubmission(condition){
    return submissionRepository.findSubmission({assignment_id: condition});
  }
}