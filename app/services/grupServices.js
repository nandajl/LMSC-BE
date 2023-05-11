const grupRepository = require("../repositories/grupRepository")

module.exports = {
    create(body){
        return grupRepository.create(body);
    },

    update(body, id){
        return grupRepository.update(body, id);
    },

    getGrup(id){
        return grupRepository.getGrup(id);
    },

    getAllGrup(){
        return grupRepository.getAllGrup();
    },

    destroy(id){
        return grupRepository.destroy(id);
    }
}