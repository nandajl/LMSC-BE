const enrollmentRepository = require("../repositories/enrollmentRepository");

module.exports = {
  create(body) {
    return enrollmentRepository.create(body);
  },
  delete(id) {
    return enrollmentRepository.delete(id);
  },
  getAllEnrollment() {
    return enrollmentRepository.getAllEnrollment();
  },
  getEnrollment(id) {
    return enrollmentRepository.getEnrollment(id);
  }
}