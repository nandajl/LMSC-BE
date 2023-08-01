const lessonsRepository = require("../repositories/lessonsRepository");

module.exports = {
    create(body, file){
        if (file === undefined) {
            return lessonsRepository.create(body);
        }
        else {
            body.content = file.filename;
            return lessonsRepository.create(body);
        }
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
    },

    findLesson(condition){
        return lessonsRepository.findLesson({group_id: condition});
    }
}