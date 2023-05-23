const questionRepository = require("../repositories/questionRepository");

module.exports = {
    create(body) {
        return questionRepository.create(body);
    },
    update(body, id) {
        return questionRepository.update(body, id);
    },
    delete(id) {
        return questionRepository.delete(id);
    },
    getAllQuestion() {
        return questionRepository.getAllQuestion();
    },
    getQuestion(id) {
        return questionRepository.getQuestion(id);
    },

    findQuestion(condition) {
        return questionRepository.findQuestion({test_id: condition});
    }
}