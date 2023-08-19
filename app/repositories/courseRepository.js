const { Course } = require("../models");

module.exports = {
  create(body){
    return Course.create(body);
  },

  update(body,id){
    return Course.update(body, {where: {id}});
  },

  delete(id){
    return Course.destroy({where: {id}});
  },

  getAllCourse(){
    return Course.findAll();
  },

  getCourse(id){
    return Course.findByPk(id);
  }

}