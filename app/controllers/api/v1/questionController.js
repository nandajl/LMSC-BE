const answerServices = require("../../../services/answerServices");
const questionServices = require("../../../services/questionServices");

module.exports = {
  async handleCreateQuestion(req, res) {
    try {
      const bodyQuestion = req.body.question;
      const bodyAnswer = req.body.answer;
      const question = await questionServices.create(bodyQuestion);
      if (question && bodyAnswer) {
        const q_id = question.id;
        const modifiedBodyAnswer = bodyAnswer.map(obj => ({...obj, question_id: q_id}))
        console.log(modifiedBodyAnswer);
        const answer = await answerServices.massCreate(modifiedBodyAnswer)
      }
      res.status(201).json(question);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async handleUpdateQuestion(req, res) {
    try {
      const body = req.body;
      const id = req.params.id;
      const response = await questionServices.update(body, id);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async handleDeleteQuestion(req, res) {
    try {
      const id = req.params.id;
      const response = await questionServices.delete(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async handleGetAllQuestion(req, res){
    try {
      const response = await questionServices.getAllQuestion();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async handleGetQuestion(req, res){
    try {
      const id = req.params.id;
      const response = await questionServices.getQuestion(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async handleFindQuestion(req, res){
    try {
      const test_id = req.params.id;
      const response = await questionServices.findQuestion(test_id);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}