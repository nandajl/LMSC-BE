const lessonsServices = require("../../../services/lessonsServices");

module.exports = {
    async handleCreateLessons(req, res){
        try {
            const file = req.file;
            const body = req.body;
            const lessons = await lessonsServices.create(body, file)
            res.status(201).json({
                message: "OK",
                data: lessons
            })
        } catch (error) {
            res.status(400).json({
                message: error
            })
        }
    },

    async handleUpdateLessons(req, res){
        try {
            const body = req.body;
            const id = req.params.id;
            const lessons = await lessonsServices.update(body,id)
            res.status(201).json({
                message: "OK",
                data: lessons
            })
        } catch (error) {
            res.status(400).json({
                message: error
            })
        }
    },

    async handleGetLessons(req, res){
        try {
            const id = req.params.id;
            const lessons = await lessonsServices.getLessons(id);
            res.status(201).json({
                message: "OK",
                data: lessons
            })
        } catch (error) {
            res.status(400).json({
                message: error
            })      
        }
    },

    async handleGetAllLessons(req, res){
        try {
            const lessons = await lessonsServices.getAllLessons();
            res.status(201).json({
                message: "OK",
                data: lessons
            })
        } catch (error) {
            res.status(400).json({
                message: error
            })
        }
    },

    async handleDeleteLessons(req, res){
        try {
            const id = req.params.id
            const lessons = await lessonsServices.destroy(id)
            res.status(201).json({
                message: "Delete Success"
            })
        } catch (error) {
            res.status(400).json({
                message: error
            })
        }
    },

    async handleFindLesson(req, res){
        try {
            const group_id = req.body.group_id
            const lessons = await lessonsServices.findLesson(group_id)
            res.status(201).json({
                message: "OK",
                data: lessons
            })
        } catch (error) {
            res.status(400).json({
                message: error
            })
        }
    }
}