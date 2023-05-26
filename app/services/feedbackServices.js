const feedbackRepository = require("../repositories/feedbackRepository");

module.exports = {
    create(body){
        return feedbackRepository.create(body);
    },

    update(body, id){
        return feedbackRepository.update(body, id);
    },

    getAll(){
        return feedbackRepository.getAll();
    },

    getFeedback(id){
        return feedbackRepository.getById(id);
    },

    delete(id){
        return feedbackRepository.delete(id);
    },

    findFeedback(condition){
        return feedbackRepository.findFeedback({user_id: condition});
    }
}