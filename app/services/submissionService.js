const submissionRepository = require("../repositories/submissionRepository");

module.exports = {
  create(body, file) {
    if (file == undefined) {
      return submissionRepository.create(body);
    }else{
      console.log(file);
      body.content = file.filename;
      return submissionRepository.create(body);
    }
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
    const { assignment_id, user_id } = condition;
    if (user_id == undefined) {
      return submissionRepository.findSubmission({ assignment_id: assignment_id });
    }else{
      return submissionRepository.findSubmission({ assignment_id: assignment_id, user_id: user_id });
    }
  }
}