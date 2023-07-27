const submissionService = require("../../../services/submissionService");

module.exports = {
  async handleCreateSubmission(req,res){
    try {
      const file = req.file;
      const body = req.body;
      const response = await submissionService.create(body, file);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async handleUpdateSubmission(req,res){
    try {
      const body = req.body;
      const id = req.params.id;
      const response = await submissionService.update(body, id);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async handleDeleteSubmission(req,res){
    try {
      const id = req.params.id;
      const response = await submissionService.delete(id);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async handleGetSubmission(req,res){
    try {
      const id = req.params.id;
      const response = await submissionService.getSubmission(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async handleFindSubmission(req,res){
    try {
      const body = req.body
      const response = await submissionService.findSubmission(body);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}