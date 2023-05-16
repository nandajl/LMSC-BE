const { Lessons } = require('../models');

module.exports = {
    create(body){
        return Lessons.create(body);
    },

    update(body, id){
        return Lessons.update(body, {
            where: {
                id
            }
        })
    },

    getAllLessons(){
        return Lessons.findAll();
    },

    getLessons(id){
        return Lessons.findByPk(id);
    },

    destroy(id){
        return Lessons.destroy({where:{id}})
    }
}