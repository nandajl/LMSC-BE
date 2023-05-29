const express = require('express');
const controller = require('../app/controllers');

const apiRouter = express.Router();

const inController = controller.api.v1;
apiRouter.get('/', controller.api.main.handleGetRoot);

//auth routes
apiRouter.post('/api/v1/register', controller.api.v1.authController.handleRegister);
apiRouter.post('/api/v1/login', controller.api.v1.authController.handleLogin);
apiRouter.get('/api/v1/user', controller.api.v1.authController.authorize, controller.api.v1.authController.whoAmI)

//user routes
apiRouter.put('/api/v1/users/:id', controller.api.v1.userController.handleUpdateUser);
apiRouter.get('/api/v1/users/:id', controller.api.v1.userController.handleGetUser);
apiRouter.get('/api/v1/users', controller.api.v1.userController.handleListUser);
apiRouter.post('/api/v1/users/find', controller.api.v1.userController.handleFindAllUser);

//company routes
apiRouter.post('/api/v1/company', controller.api.v1.companyController.handleCreateCompany);
apiRouter.put('/api/v1/company/:id', controller.api.v1.companyController.handleUpdateCompany);
apiRouter.get('/api/v1/company/:id', controller.api.v1.companyController.handleGetCompany);
apiRouter.post('/api/v1/company/find', controller.api.v1.companyController.handleFindCompany);

//Grup routes
apiRouter.get('/api/v1/grup', controller.api.v1.grupController.handleGetAllGrup);
apiRouter.post('/api/v1/grup/find', controller.api.v1.grupController.handleFindGrup);
apiRouter.post('/api/v1/grup', controller.api.v1.grupController.handleCreateGrup);
apiRouter.put('/api/v1/grup/:id', controller.api.v1.grupController.handleUpdateGrup);
apiRouter.get('/api/v1/grup/:id', controller.api.v1.grupController.handleGetGrup);
apiRouter.delete('/api/v1/grup/:id', controller.api.v1.grupController.handleDeleteGrup);


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
apiRouter.get('/api/v1/user/answer', controller.api.v1.userAnswerController.handleGetAllUserAnswer);

apiRouter.use(controller.api.main.onLost);
apiRouter.use(controller.api.main.onError);

module.exports = apiRouter;