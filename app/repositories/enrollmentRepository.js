const { Enrollment, User, Classes } = require("../models");

module.exports = {
  create(body){
    return Enrollment.create(body);
  },

  delete(id){
    return Enrollment.destroy({where: {id}});
  },

  getAllEnrollment(){
    return Enrollment.findAll();
  },

  getEnrollment(id){
    return Enrollment.findByPk(id, 
      {include: [
        {model: User},
        {model: Classes}  
      ]}
    );
  },

  findEnrollment(condition){
    return Enrollment.findAll({
      include: [
        {model: Classes},
        {model: User} 
      ],
      where: condition
    })
  }
}