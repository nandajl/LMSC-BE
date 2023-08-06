const notificationServices = require("../../../services/notificationServices");

module.exports = {
  async handleFindNotification(req, res) {
    try {
      const response = await notificationServices.findNotification(req.body);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async handleUpdateNotification(req, res) {
    try {
      const response = await notificationServices.update(req.body, req.params.id);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}