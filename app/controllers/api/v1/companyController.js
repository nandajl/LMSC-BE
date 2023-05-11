const companyServices = require("../../../services/companyServices");
const crypto = require('crypto');

module.exports = {
    async handleCreateCompany(req, res){
        try {
            const body = req.body;
            const code = crypto.randomBytes(3).toString('hex');
            body.company_code = code
            console.log(body);
            const company = await companyServices.create(body);
            res.status(201).json({
                message:"OK",
                data: company
            })
        } catch (error) {
            res.status(400).json({
                message: error
            })
        }
    },

    async handleUpdateCompany(req, res){
        try {
            const body = req.body;
            const id = req.params.id;
    
            const company = await companyServices.update(body, id);
            res.status(201).json({
                message: "OK",
                data: company
            });
            
        } catch (error) {
            res.status(201).json({
                message: error
            })
        }
    },

    async handleGetCompany(req, res){
        try {
            const id = req.params.id;

            const company = await companyServices.getCompany(id);
            res.status(201).json({
                message: "OK",
                data: company
            });
        } catch (error) {
            res.status(401).json({
                message: error
            })
        }
    },
    
    async handleFindCompany(req, res){
        try {
            const body = req.body;
            const company_code = body.company_code;
            const company = await companyServices.findCompany(company_code);
            res.status(201).json({
                message: "OK",
                data: company
            });
        } catch (error) {
            res.status(401).json({
                message: error
            })
        }
    },


}
