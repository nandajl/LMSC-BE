const notificationRepository = require("../repositories/notificationRepository");

module.exports = {
  create(body) {
    return notificationRepository.create(body);
  },

  update(body, id) {
    return notificationRepository.update(body, id);
  },

  findNotification(condition){
    const { user_id } = condition;
    return notificationRepository.findNotification({user_id: user_id});
  }
}