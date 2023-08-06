const { Notification, User, Course } = require('../models');

module.exports = {
  create(body) {
    return Notification.create(body);
  },

  update(body, id){
    return Notification.update(body, {where: {id}});
  },

  findNotification(condition){
    return Notification.findAll({
      include: [
        {model: User},
        {model: Course},
      ],
      where: condition
    });
  }
}