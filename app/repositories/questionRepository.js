const { Question, Test, Answer } = require('../models');

module.exports = {
    create(body) {
        return Question.create(body);
    },

    update(body, id) {
        return Question.update(body, {where: {id}});
    },

    delete(id) {
        return Question.destroy({where: {id}});
    },

    getAllQuestion() {
        return Question.findAll();
    },

    getQuestion(id) {
        return Question.findByPk(id);
    },

    findQuestion(condition) {
        return Question.findAll({
            include: [
                {model: Test},
                {model: Answer},
            ],
            where: condition
        });
    }
}