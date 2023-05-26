const { Company } = require('../models');

module.exports = {
    create(body) {
        return Company.create(body)
    },

    update(body, id){
        return Company.update(body, {
            where: {
                id
            }
        })
    },

    getCompany(id){
        return Company.findByPk(id)
    },

    findCompany(condition){
        return Company.findOne({
            where: condition
        })
    }
    
}