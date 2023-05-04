const companyServices = require("../../../services/companyServices");

module.exports = {
    async handleCreateCompany(req, res){
        try {
            const body = req.body;
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
    }
}
