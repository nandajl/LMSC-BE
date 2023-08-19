const courseRepository = require("../repositories/courseRepository");

module.exports = {
  create(body) {
    return courseRepository.create(body);
  },

  update(body, id) {
    return courseRepository.update(body, id);
  },

  delete(id) {
    return courseRepository.delete(id);
  },

  getAllCourse(){
    return courseRepository.getAllCourse();
  },

  getCourse(id){
    return courseRepository.getCourse(id);
  }

}