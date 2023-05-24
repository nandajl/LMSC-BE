const { User } = require('../models');

module.exports = {
    create(body){
        return User.create(body);
    },
    
    update(id, body){
        return User.update(body, {
            where: {
                id
            }
        });
    },

    getUser(id){
        return User.findByPk(id);
    },

    getAllUser(){
        return User.findAll()
    },

    findUser(condition){
        return User.findOne({
            where: condition
        })
    },

    findAllUser(condition){
        return User.findAll({
            where: condition
        })
    },

    destroy(id){
        return User.destroy({
            where: {
                id
            }
        })
    }
}