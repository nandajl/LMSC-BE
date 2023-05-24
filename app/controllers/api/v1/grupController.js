const companyServices = require("../../../services/companyServices");
const grupServices = require("../../../services/grupServices");
const crypto = require('crypto');


module.exports = {
    async handleCreateGrup(req, res) {
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

    async handleUpdateGrup(req, res) {
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

    async handleGetGrup(req, res) {
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

    async handleGetAllGrup(req, res) {
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

    async handleDeleteGrup(req, res) {
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

    async handleFindGrup(req, res) {
        try {
            const company_code = req.body.companyCode;
            const code = req.body.grupCode;
            console.log(code);
            if (company_code) {
                const company = await companyServices.findCompany(company_code);
                if (!company) {
                    res.status(400).json({
                        message: error
                    });
                }
                const companyId = company.id
                const company_id = companyId.toString()
                const grup = await grupServices.findGrup(company_id)
                res.status(201).json({
                    status: "OK",
                    data: grup
                })
            } else if (code) {
                const grup = await grupServices.findGrupWithCode(code);
                if (!grup) {
                    res.status(400).json({
                        message: "Grup not Found"
                    });
                }
                res.status(201).json({
                    status: "OK",
                    data: grup
                })
            }
            return
        } catch (error) {
            res.status(400).json({
                message: error
            });
        }
    }


}