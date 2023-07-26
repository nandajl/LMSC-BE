const courseServices = require("../../../services/courseServices");

module.exports = {
  async handleCreateCourse(req, res){
    try {
        const course = await courseServices.create(req.body)
        res.status(201).json({
          message: "OK", 
          data: course
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
  },

  async handleUpdateCourse(req, res){
    try {
        const body = req.body;
        const id = req.params.id;
        const course = await courseServices.update(body, id)
        res.status(201).json({
            message: "OK",
            data: course
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
  },

  async handleGetAllCourse(req, res){
    try {
        const course = await courseServices.getAllCourse()
        res.status(201).json({
            message: "OK",
            data: course
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
  },

  async handleGetCourse(req, res){
    try {
        const id = req.params.id;
        const course = await courseServices.getCourse(id)
        res.status(201).json({
            message: "OK",
            data: course
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
  },

  async handleDeleteCourse(req, res){
    try {
        const id = req.params.id;
        const course = await courseServices.delete(id)
        res.status(201).json({
            message: "OK",
            data: course
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
  },

  async handleFindCourse(req, res){
    try {
        const user_id = req.body.user_id;
        const course = await courseServices.findCourse(user_id)
        res.status(201).json({
            message: "OK",
            data: course
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
  }
}