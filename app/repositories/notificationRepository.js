const { Notification, User, Classes } = require('../models');

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
        {model: Classes},
      ],
      where: condition
    });
  }
}