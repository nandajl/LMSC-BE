const { Enrollment, User, Classes, Course } = require("../models");

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
        {model: Classes, 
          include: [
            {model: Course}
          ]
        }  
      ]}
    );
  },

  findEnrollment(condition){
    return Enrollment.findAll({
      include: [
        {model: Classes, 
          include: [
            {model: Course}
          ]
        },
        {model: User} 
      ],
      where: condition
    })
  }
}