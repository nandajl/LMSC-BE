const enrollmentRepository = require("../repositories/enrollmentRepository");
const notificationRepository = require("../repositories/notificationRepository");
const testRepository = require("../repositories/testRepository");

module.exports = {
    async create(body){
        try {
            const response = await testRepository.create(body);
            if (response) {
            const { class_id } = response;
            const enrollment = await enrollmentRepository.findEnrollment({class_id: class_id});
            enrollment.map((enrollment) => {
                notificationRepository.create({
                user_id: enrollment.user_id,
                class_id: enrollment.class_id,
                message: `Kuis baru untuk mata kuliah ${enrollment.CLasses.name}`,
                is_read: false
                })
            })
            }
            return response;    
        } catch (error) {
            return error
        }
    },

    update(body, id){
        return testRepository.update(body, id)
    },

    getAllTets(){
        return testRepository.getAllTest()
    },

    getTest(id){
        return testRepository.getTest(id)
    },

    destroy(id){
        return testRepository.destroy(id)
    },

    findTest(condition){
        return testRepository.findTest({group_id: condition})
    }
}