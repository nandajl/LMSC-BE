const classRepository = require("../repositories/classRepository");

module.exports = {
  create(body) {
    return classRepository.create(body);
  },

  update(body, id) {
    return classRepository.update(body, id);
  },

  delete(id) {
    return classRepository.delete(id);
  },

  getAllClass(){
    return classRepository.getAllClass();
  },

  getClass(id){
    return classRepository.getClass(id);
  },

  findClass(condition){
    return classRepository.findClass({user_id: condition});
  }
}