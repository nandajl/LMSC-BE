const userRepositories = require("../../../repositories/userRepositories");

module.exports = {
    async handleUpdateUser(req, res){
        try {
            const id = req.params.id;
            const body = req.body;
            const user = await userRepositories.update(id, body);
            res.status(201).json({
                message: "OK",
                data: user
            });
        } catch (error) {
            res.status(400).json({
                message: error
            })
        }
    },

    async handleGetUser(req,res){
        try {
            const user = await userRepositories.getUser(req.params.id);
            res.status(201).json({
                message: "OK",
                data: user
            });
        } catch (error) {
            res.status(400).json({
                message: error
            });
        }
    },

    async handleListUser(req,res){
        try {
            const user = await userRepositories.getAllUser();
            res.status(201).json({
                message: "OK",
                data: user
            })
        } catch (error) {
            res.status(400).json({
                message: error
            });
        }
    }

}