const { Feedback, User, FeedbackCat } = require('../models');


module.exports = {
    create(body){
        return Feedback.create(body);
    },

    update(body, id){
        return Feedback.update(body, {where: {id}});
    },

    getAll(){
        return Feedback.findAll({
            include: [
                {model: User},
                {model: FeedbackCat}
            ]
        });
    },

    getById(id){
        return Feedback.findByPk(id);
    },

    delete(id){
        return Feedback.destroy({where: {id}});
    },

    findFeedback(condition){
        return Feedback.findAll({
            include: [
                {model: User},
                {model: FeedbackCat}
            ],
            where: condition
        });
    }

}