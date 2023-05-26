const { FeedbackCat } = require("../models");

module.exports = {
  create(body) {
    return FeedbackCat.create(body);
  },
  
  update(body, id) {
    return FeedbackCat.update(body, { where: { id } });
  },

  getAll() {
    return FeedbackCat.findAll();
  },

  getById(id) {
    return FeedbackCat.findByPk(id);
  },

  destroy(id) {
    return FeedbackCat.destroy({ where: { id } });
  } 
}