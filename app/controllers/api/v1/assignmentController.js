const assignmentServices = require("../../../services/assignmentServices");

module.exports = {
  async handleCreateEnrollment(req, res) {
    try {
      const body = req.body;
      const response = await assignmentServices.create(body);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async handleUpdateAssignment(req, res) {
    try {
      const body = req.body;
      const id = req.params.id;
      const response = await assignmentServices.update(body, id);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async handleDeleteEnrollment(req, res) {
    try {
      const id = req.params.id;
      const response = await assignmentServices.delete(id);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async handleGetEnrollment(req, res) {
    try {
      const id = req.params.id;
      const response = await assignmentServices.getAssignment(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async handleFindEnrollment(req, res) {
    try {
      const courseId = req.body.course_id
      const response = await assignmentServices.findAssignment(courseId);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}