const companyRepository = require("../repositories/companyRepository");

module.exports = {
    create(body){
        return companyRepository.create(body);
    },

    update(body, id){
        return companyRepository.update(body, id);
    },

    getCompany(id){
        return companyRepository.getCompany(id);
    }
}