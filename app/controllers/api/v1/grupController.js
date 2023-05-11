const grupServices = require("../../../services/grupServices");
const crypto = require('crypto');

module.exports = {
    async handleCreateGrup(req, res){
        try {
            const body = req.body;
            const grup = await grupServices.create(body)
            res.status(201).json({
                message: "OK",
                data: grup
            })
        } catch (error) {
            res.status(400).json({
                message: error
            })
        }
    },

    async handleUpdateGrup(req, res){
        try {
            const body = req.body;
            const id = req.params.id;
            const grup = await grupServices.update(body, id)
            res.status(201).json({
                message: "OK",
                data: grup
            })
        } catch (error) {
            res.status(400).json({
                message: error
            })
        }
    },

    async handleGetGrup(req, res){
        try {
            const id = req.params.id;
            const grup = await grupServices.getGrup(id)
            res.status(201).json({
                message: "OK",
                data: grup
            })
        } catch (error) {
            res.status(400).json({
                message: error
            })
        }
    },

    async handleGetAllGrup(req, res){
        try {
            const grup = await grupServices.getAllGrup()
            res.status(201).json({
                message: "OK",
                data: grup
            })
        } catch (error) {
            res.status(400).json({
                message: error
            })
        }
    },
 
    async handleDeleteGrup(req, res){
        try {
            const id = req.params.id;
            console.log(id);
            await grupServices.destroy(id)
            res.status(201).json({
                message: "Delete Success"
            })
        } catch (error) {
            res.status(400).json({
                message: error
            })
        }
    },
 
    
}