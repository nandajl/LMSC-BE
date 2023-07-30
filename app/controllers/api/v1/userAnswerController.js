const userAnswerServices = require("../../../services/userAnswerServices");

module.exports = {
  async handleCreateUserAnswer(req, res) {
    try {
      const userAnswer = await userAnswerServices.massCreate(req.body);
      res.status(201).json(userAnswer);
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  },

  async handleGetAllUserAnswer(req, res) {
    try {
      const userAnswer = await userAnswerServices.getAllUserAnswer();
      res.status(200).json(userAnswer);
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  },

  async handleFindAllUserAnswer(req, res) {
    try {
      const userAnswer = await userAnswerServices.findAllUserAnswer(req.body);
      res.status(200).json(userAnswer);
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  }
}