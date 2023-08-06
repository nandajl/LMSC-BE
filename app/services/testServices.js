const enrollmentRepository = require("../repositories/enrollmentRepository");
const notificationRepository = require("../repositories/notificationRepository");
const testRepository = require("../repositories/testRepository");

module.exports = {
    async create(body){
        try {
            const response = await testRepository.create(body);
            if (response) {
            const { course_id } = response;
            const enrollment = await enrollmentRepository.findEnrollment({course_id: course_id});
            enrollment.map((enrollment) => {
                notificationRepository.create({
                user_id: enrollment.user_id,
                course_id: enrollment.course_id,
                message: `Kuis baru untuk mata kuliah ${enrollment.Course.name}`,
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