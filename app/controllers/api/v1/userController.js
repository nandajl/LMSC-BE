const userRepositories = require("../../../repositories/userRepositories");
const companyServices = require("../../../services/companyServices");
const grupServices = require("../../../services/grupServices");
const userServices = require("../../../services/userServices");

module.exports = {
    async handleUpdateUser(req, res){
        try {
            const id = req.params.id;
            const body = req.body;
            const company_code = body.company_code;;
            if (company_code) {
                const company = await companyServices.findCompany(company_code)
                if (!company) {
                    return res.status(404).json({
                        message: "Company Not Found"
                    });
                }
            }
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
    },

    async handleFindAllUser(req,res){
        try {
            const group_id = req.body.group_id;
            const user = await userServices.findAllUser(group_id);
            res.status(201).json(user)
        } catch (error) {
            res.status(400).json({
                message: error 
            })
        }
    }
}