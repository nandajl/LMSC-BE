const enrollmentRepository = require("../repositories/enrollmentRepository");
const classRepository = require('../repositories/classRepository');

module.exports = {
  async create(body) {
    try {
      const { code } = body;
      const isValid = await classRepository.findClass({code: code});
      if (isValid.length === 0) {
        return {
          code : 404,
          message : "Kode Tidak Valid" 
        };
      }
      body.class_id = isValid[0].id;
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
    const { user_id, class_id } = condition;
    if (class_id === undefined) {
      return enrollmentRepository.findEnrollment({user_id :user_id});
    }else {
      return enrollmentRepository.findEnrollment({class_id :class_id});
    }
  }
}