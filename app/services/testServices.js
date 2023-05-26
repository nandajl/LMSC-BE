const testRepository = require("../repositories/testRepository");

module.exports = {
    create(body){
        return testRepository.create(body)
    },

    update(body, id){
        return testRepository.update(body, id)
    },

    getAllTets(){
        return testRepository.getAllTest()
    },

    getTest(id){
        return testRepository.getTest(id)
    },

    destroy(id){
        return testRepository.destroy(id)
    },

    findTest(condition){
        return testRepository.findTest({group_id: condition})
    }
}