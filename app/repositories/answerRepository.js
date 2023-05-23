const { Answer } = require('../models');

module.exports = {
  create(body) {
    return Answer.create(body);
  },

  update(body, id) {
    return Answer.update(body, {where: {id}});
  },

  delete(id) {
    return Answer.destroy({where: {id}});
  },

  getAllAnswer() {
    return Answer.findAll();
  },

  getAnswer(id) {
    return Answer.findByPk(id);
  },

  massCreate(body) {
    return Answer.bulkCreate(body);
  }
}