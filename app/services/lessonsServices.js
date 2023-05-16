const lessonsRepository = require("../repositories/lessonsRepository");

module.exports = {
    create(body){
        return lessonsRepository.create(body);
    },

    update(body, id){
        return lessonsRepository.update(body, id);
    },

    getLessons(id){
        return lessonsRepository.getLessons(id);
    },

    getAllLessons(){
        return lessonsRepository.getAllLessons();
    },

    destroy(id){
        return lessonsRepository.destroy(id)
    }
}