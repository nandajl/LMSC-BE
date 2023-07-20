const enrollmentServices = require("../../../services/enrollmentServices");

module.exports = {
  async handleCreateEnrollment(req, res) {
    try {
      const body = req.body;
      const response = await enrollmentServices.create(body);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async handleDeleteEnrollment(req, res) {
    try {
      const id = req.params.id;
      const response = await enrollmentServices.delete(id);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async handleGetEnrollment(req, res) {
    try {
      const id = req.params.id;
      const response = await enrollmentServices.getEnrollment(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async handleGetAllEnrollment(req, res) {
    try {
      const response = await enrollmentServices.getAllEnrollment();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}