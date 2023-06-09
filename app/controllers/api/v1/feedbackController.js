const feedbackCatServices = require("../../../services/feedbackCatServices");
const feedbackServices = require("../../../services/feedbackServices");

module.exports = {
    async handleCreateFeedback(req, res){
        try {
            const body = req.body;
            const feedback = await feedbackServices.create(body)
            res.status(201).json({
                message: "OK",
                data: feedback
            })
        } catch (error) {
            res.status(400).json({
                message: error
            })
        }
    },

    async handleUpdateFeedback(req, res){
        try {
            const body = req.body;
            const id = req.params.id;
            const feedback = await feedbackServices.update(body, id)
            res.status(201).json({
                message: "OK",
                data: feedback
            })
        } catch (error) {
            res.status(400).json({
                message: error
            })
        }
    },

    async handleGetAllFeedback(req, res){
        try {
            const feedback = await feedbackServices.getAll()
            res.status(201).json({
                message: "OK",
                data: feedback
            })
        } catch (error) {
            res.status(400).json({
                message: error
            })
        }
    },

    async handleGetFeedback(req, res){
        try {
            const id = req.params.id;
            const feedback = await feedbackServices.getFeedback(id)
            res.status(201).json({
                message: "OK",
                data: feedback
            })
        } catch (error) {
            res.status(400).json({
                message: error
            })
        }
    },

    async handleDeleteFeedback(req, res){
        try {
            const id = req.params.id;
            const feedback = await feedbackServices.delete(id)
            res.status(201).json({
                message: "OK",
                data: feedback
            })
        } catch (error) {
            res.status(400).json({
                message: error
            })
        }
    },

    async handleFindFeedback(req, res){
        try {
            const condition = req.body.user_id;
            console.log("condition", condition);
            const feedback = await feedbackServices.findFeedback(condition)
            res.status(201).json({
                message: "OK",
                data: feedback
            })
        } catch (error) {
            res.status(400).json({
                message: error
            })
        }
    },

    async handleGetFeedbackCat(req, res){
        try {
            const feedback = await feedbackCatServices.getAll()
            res.status(201).json(feedback)
        } catch (error) {
            res.status(400).json(error)
        }
    }
}