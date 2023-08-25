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
    const data = classRepository.findClass({dosen_id_1: condition});
    if (!data) {
      return classRepository.findClass({dosen_id_2: condition});
    }
    return data;
    
  }
}