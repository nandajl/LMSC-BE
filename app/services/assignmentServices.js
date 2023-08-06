const assignmentRepository = require("../repositories/assignmentRepository");
const enrollmentRepository = require("../repositories/enrollmentRepository");
const notificationRepository = require("../repositories/notificationRepository");

module.exports = {
  async create(body, file) {
    try {
      if (file == undefined) {
        const response = await assignmentRepository.create(body);
        if (response) {
          const { course_id } = response;
          const enrollment = await enrollmentRepository.findEnrollment({course_id: course_id});
          enrollment.map((enrollment) => {
            notificationRepository.create({
              user_id: enrollment.user_id,
              course_id: enrollment.course_id,
              message: `Kamu Memiliki Tugas baru untuk mata kuliah ${enrollment.Course.name}`,
              is_read: false
            })
          })
        }
        return response;
      }
      else{
        body.content = file.filename;
        const response = await assignmentRepository.create(body);
        if (response) {
          const { course_id } = response;
          const enrollment = await enrollmentRepository.findEnrollment({course_id: course_id});
          enrollment.map((enrollment) => {
            notificationRepository.create({
              user_id: enrollment.user_id,
              course_id: enrollment.course_id,
              message: `Kamu Memiliki Tugas baru untuk mata kuliah ${enrollment.Course.name}`,
              is_read: false
            })
          })
        }
        return response;
      }
    } catch (error) {
      return error;
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