const classServices = require("../../../services/classServices");

module.exports = {
  async handleCreateClass(req, res){
    try {
        console.log("req", req.body);
        const classes = await classServices.create(req.body)
        res.status(201).json({
          message: "OK", 
          data: classes
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
  },

  async handleUpdateClass(req, res){
    try {
        const body = req.body;
        const id = req.params.id;
        const classes = await classServices.update(body, id)
        res.status(201).json({
            message: "OK",
            data: classes
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
  },

  async handleGetAllClass(req, res){
    try {
        const classes = await classServices.getAllClass()
        res.status(201).json({
            message: "OK",
            data: classes
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
  },

  async handleGetClass(req, res){
    try {
        const id = req.params.id;
        const classes = await classServices.getClass(id)
        res.status(201).json({
            message: "OK",
            data: classes
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
  },

  async handleDeleteClass(req, res){
    try {
        const id = req.params.id;
        const classes = await classServices.delete(id)
        res.status(201).json({
            message: "OK",
            data: classes
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
  },

  async handleFindClass(req, res){
    try {
        const user_id = req.body.user_id;
        const classes = await classServices.findClass(user_id)
        res.status(201).json({
            message: "OK",
            data: classes
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
  },

  async handleFindClassCourseId(req, res){
    try {
        const course_id = req.body.course_id;
        const classes = await classServices.findClassCourseId(course_id);
        res.status(201).json({
            message: "OK",
            data: classes
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
  }
}