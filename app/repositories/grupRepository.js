const { Grup } = require('../models');

module.exports = {
    create(body){
        return Grup.create(body);
    },

    update(body, id){
        return Grup.update(body, {
            where: {
                id
            }
        });
    },

    getAllGrup(){
        return Grup.findAll();
    },

    getGrup(id){
        return Grup.findByPk(id);
    },

    destroy(id){
        return Grup.destroy({
            where: {
                id
            }
        })
    }


}