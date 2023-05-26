const testServices = require("../../../services/testServices");

module.exports = {
  async handleCreateTest(req, res) {
    try {
      const body = req.body;
      const test = await testServices.create(body)
      res.status(201).json({
        message: "OK",
        data: test
      })
    } catch (error) {
      res.status(401).json({
        message: error
      })
    }
  },

  async handleUpdateTest(req, res){
    try {
      const body = req.body;
      const id = req.params.id;
      const test = await testServices.update(body, id)
      res.status(201).json({
        message: "OK",
        data: test
      })
    } catch (error) {
      res.status(401).json({
        message: error
      })
    }
  },

  async handleGetAllTest(req, res){
    try {
      const test = await testServices.getAllTets()
      res.status(201).json({
        message: "OK",
        data: test
      })
    } catch (error) {
      res.status(401).json({
        message: error
      })
    }
  },

  async handleGetTest(req, res){
    try {
      const id = req.params.id;
      const test = await testServices.getTest(id);
      res.status(201).json({
        message: "OK",
        data: test
      })
    } catch (error) {
      res.status(401).json({
        message: error
      })
    }
  },

  async handleDeleteTest(req, res){
    try {
      const id = req.params.id
      await testServices.destroy(id)
      res.status(201).json({
        message: "Delete Success"
      })
    } catch (error) {
      res.status(401).json({
        message: error
      })
    }
  },

  async handleFindTest(req, res){
    try {
      const condition = req.body.group_id;
      console.log(condition);
      const test = await testServices.findTest(condition)
      res.status(201).json({
        message: "OK",
        data: test
      })
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  }
}