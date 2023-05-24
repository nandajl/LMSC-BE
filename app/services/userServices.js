const userRepositories = require('../repositories/userRepositories');

module.exports = {

    update(id, body){
        return userRepositories.update(id, body);
    },

    getUser(id){
        return userRepositories.getUser(id);
    },

    getAllUser(){
        return userRepositories.getAllUser();
    },

    destroy(id){
        return userRepositories.destroy(id);
    },

    findAllUser(condition){
        return userRepositories.findAllUser({group_id: condition});
    }
}