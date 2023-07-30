const { Course, Assignment, Lessons, Test, User } = require("../models");

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
    return Course.findAll({
      include: [
        {model: User},
      ]
    });
  },

  getCourse(id){
    return Course.findByPk(id, {
      include: [
        {model: Lessons},
        {model: Assignment},
        {model: Test},
        {model: User}
      ]
    });
  },

  findCourse(condition){
    console.log("condition", condition);
    return Course.findAll({
      include: [
        {model: Lessons},
        {model: Assignment},
        {model: Test},
      ],
      where: condition
    });
  }
}