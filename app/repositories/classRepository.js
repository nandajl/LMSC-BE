const { Classes, Course, Assignment, Lessons, Test, User } = require("../models");

module.exports = {
  create(body){
    return Classes.create(body);
  },

  update(body,id){
    return Classes.update(body, {where: {id}});
  },

  delete(id){
    return Classes.destroy({where: {id}});
  },

  getAllClass(){
    return Classes.findAll({
      include: [
        {model: User},
      ]
    });
  },

  getClass(id){
    return Classes.findByPk(id, {
      include: [
        {model: Course},
        {model: Lessons},
        {model: Assignment},
        {model: Test},
        {model: User}
      ]
    });
  },

  findClass(condition){
    return Classes.findAll({
      include: [
        {model: Course},
        {model: Lessons},
        {model: Assignment},
        {model: Test},
      ],
      where: condition
    });
  }
}