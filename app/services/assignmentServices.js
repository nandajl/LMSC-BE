const assignmentRepository = require("../repositories/assignmentRepository");

module.exports = {
  create(body) {
    return assignmentRepository.create(body);
  },
  update(body, id) {
    return assignmentRepository.update(body, id);
  },
  delete(id) {
    return assignmentRepository.delete(id);
  },
  getAssignment(id) {
    return assignmentRepository.getAssignment(id);
  },
  findAssignment(condition){
    return assignmentRepository.findAssignment({course_id: condition});
  }
}