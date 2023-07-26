const enrollmentRepository = require("../repositories/enrollmentRepository");
const courseRepository = require('../repositories/courseRepository');

module.exports = {
  async create(body) {
    try {
      const { code } = body;
      const isValid = await courseRepository.findCourse({code: code});
      if (isValid.length === 0) {
        return {
          code : 404,
          message : "Kode Tidak Valid" 
        };
      }
      body.course_id = isValid[0].id;
      return enrollmentRepository.create(body);
    } catch (error) {
      return error;
    }
  },
  delete(id) {
    return enrollmentRepository.delete(id);
  },
  getAllEnrollment() {
    return enrollmentRepository.getAllEnrollment();
  },
  getEnrollment(id) {
    return enrollmentRepository.getEnrollment(id);
  },

  findEnrollment(condition) {
    return enrollmentRepository.findEnrollment({user_id :condition});
  }
}