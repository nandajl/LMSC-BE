const { Test, Lessons } = require('../models');

module.exports = {
  create(body){
    return Test.create(body)
  },

  update(body, id){
    return Test.update(body, {
      where: {id}
    })
  },

  getAllTest(){
    return Test.findAll()
  },

  getTest(id){
    return Test.findByPk(id)
  },

  destroy(id){
    return Test.destroy({
      where: {id}
    })
  },

  findTest(condition){
    return Test.findAll({
      include: { 
          model: Lessons,
          where: condition
        }
    })
  }
}