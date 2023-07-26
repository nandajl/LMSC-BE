const assignmentRepository = require("../repositories/assignmentRepository");

module.exports = {
  create(body, file) {
    if (file == undefined) {
      return assignmentRepository.create(body);
    }
    else{
      body.content = file.filename;
      return assignmentRepository.create(body);
    }
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