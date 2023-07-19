const express = require('express');
const controller = require('../app/controllers');
const cloudStorage = require('./cloudStorage');

const apiRouter = express.Router();

const inController = controller.api.v1;
apiRouter.get('/', controller.api.main.handleGetRoot);

//auth routes
apiRouter.post('/api/v1/register', controller.api.v1.authController.handleRegister);
apiRouter.post('/api/v1/login', controller.api.v1.authController.handleLogin);
apiRouter.get('/api/v1/user', controller.api.v1.authController.authorize, controller.api.v1.authController.whoAmI)

//user routes
apiRouter.put('/api/v1/users/:id', cloudStorage.single('photo'), controller.api.v1.userController.handleUpdateUser);
apiRouter.get('/api/v1/users/:id', controller.api.v1.userController.handleGetUser);
apiRouter.get('/api/v1/users', controller.api.v1.userController.handleListUser);
apiRouter.post('/api/v1/users/find', controller.api.v1.userController.handleFindAllUser);

//Lessons routes
apiRouter.get('/api/v1/lessons', controller.api.v1.lessonsController.handleGetAllLessons);
apiRouter.post('/api/v1/lessons', controller.api.v1.lessonsController.handleCreateLessons);
apiRouter.post('/api/v1/lessons/find', controller.api.v1.lessonsController.handleFindLesson);
apiRouter.put('/api/v1/lessons/:id', controller.api.v1.lessonsController.handleUpdateLessons);
apiRouter.get('/api/v1/lessons/:id', controller.api.v1.lessonsController.handleGetLessons);
apiRouter.delete('/api/v1/lessons/:id', controller.api.v1.lessonsController.handleDeleteLessons);

//test Routes
apiRouter.get('/api/v1/test', controller.api.v1.testController.handleGetAllTest);
apiRouter.post('/api/v1/test', controller.api.v1.testController.handleCreateTest);
apiRouter.post('/api/v1/test/find', controller.api.v1.testController.handleFindTest);
apiRouter.put('/api/v1/test/:id', controller.api.v1.testController.handleUpdateTest);
apiRouter.get('/api/v1/test/:id', controller.api.v1.testController.handleGetTest);
apiRouter.delete('/api/v1/test/:id', controller.api.v1.testController.handleDeleteTest);
 
//feedbcak Routes
apiRouter.get('/api/v1/feedback', controller.api.v1.feedbackController.handleGetAllFeedback);
apiRouter.get('/api/v1/feedback/category', controller.api.v1.feedbackController.handleGetFeedbackCat);
apiRouter.post('/api/v1/feedback/find', controller.api.v1.feedbackController.handleFindFeedback);
apiRouter.post('/api/v1/feedback', controller.api.v1.feedbackController.handleCreateFeedback);
apiRouter.put('/api/v1/feedback/:id', controller.api.v1.feedbackController.handleUpdateFeedback);
apiRouter.get('/api/v1/feedback/:id', controller.api.v1.feedbackController.handleGetFeedback);
apiRouter.delete('/api/v1/feedback/:id', controller.api.v1.feedbackController.handleDeleteFeedback);

//question Routes
apiRouter.get('/api/v1/question', controller.api.v1.questionController.handleGetAllQuestion);
apiRouter.post('/api/v1/question', controller.api.v1.questionController.handleCreateQuestion);
apiRouter.put('/api/v1/question/:id', controller.api.v1.questionController.handleUpdateQuestion);
apiRouter.get('/api/v1/question/:id', controller.api.v1.questionController.handleGetQuestion);
apiRouter.delete('/api/v1/question/:id', controller.api.v1.questionController.handleDeleteQuestion);
apiRouter.post('/api/v1/question/test/:id', controller.api.v1.questionController.handleFindQuestion);


// user answer routes
apiRouter.post('/api/v1/user/answer', controller.api.v1.userAnswerController.handleCreateUserAnswer);
apiRouter.post('/api/v1/user/answer/find', controller.api.v1.userAnswerController.handleFindAllUserAnswer);
apiRouter.get('/api/v1/user/answer', controller.api.v1.userAnswerController.handleGetAllUserAnswer);

//course Routes
apiRouter.get('/api/v1/course', controller.api.v1.courseController.handleGetAllCourse);
apiRouter.post('/api/v1/course', controller.api.v1.courseController.handleCreateCourse);
apiRouter.put('/api/v1/course/:id', controller.api.v1.courseController.handleUpdateCourse);
apiRouter.get('/api/v1/course/:id', controller.api.v1.courseController.handleGetCourse);
apiRouter.delete('/api/v1/course/:id', controller.api.v1.courseController.handleDeleteCourse);
apiRouter.post('/api/v1/course/user', controller.api.v1.courseController.handleFindCourse);

apiRouter.use(controller.api.main.onLost);
apiRouter.use(controller.api.main.onError);

module.exports = apiRouter;