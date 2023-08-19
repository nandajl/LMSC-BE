const { Assignment, Class } = require("../models");

module.exports = {
  create(body) {
    return Assignment.create(body);
  },
  update(body, id) {
    return Assignment.update(body, { where: { id } });
  },
  delete(id) {
    return Assignment.destroy({ where: { id } });
  },
  getAssignment(id) {
    return Assignment.findByPk(id);
  },
  findAssignment(condition){
    return Assignment.findAll({
      include: [
        {model: Class},
      ],
      where: condition
    });
  }
}