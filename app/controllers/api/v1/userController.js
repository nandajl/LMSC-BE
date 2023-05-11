const userRepositories = require("../../../repositories/userRepositories");
const companyServices = require("../../../services/companyServices");

module.exports = {
    async handleUpdateUser(req, res){
        try {
            const id = req.params.id;
            const body = req.body;
            const company_code = body.company_code;
            console.log(company_code);
            if (company_code) {
                const company = await companyServices.findCompany(company_code)
                if (!company) {
                    return res.status(401).json({
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
    }

}