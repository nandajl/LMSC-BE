const express = require('express');
const controller = require('../app/controllers');
const cloudStorage = require('./cloudStorage');
const upload = require('./upload');

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
apiRouter.post('/api/v1/lessons', upload.single('content'), controller.api.v1.lessonsController.handleCreateLessons);
apiRouter.post('/api/v1/lessons/find', controller.api.v1.lessonsController.handleFindLesson);
apiRouter.put('/api/v1/lessons/:id', upload.single('content'), controller.api.v1.lessonsController.handleUpdateLessons);
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

//class Routes
apiRouter.get('/api/v1/class', controller.api.v1.classController.handleGetAllClass);
apiRouter.post('/api/v1/class', controller.api.v1.classController.handleCreateClass);
apiRouter.put('/api/v1/class/:id', controller.api.v1.classController.handleUpdateClass);
apiRouter.get('/api/v1/class/:id', controller.api.v1.classController.handleGetClass);
apiRouter.delete('/api/v1/class/:id', controller.api.v1.classController.handleDeleteClass);
apiRouter.post('/api/v1/class/user', controller.api.v1.classController.handleFindClass);

//enrollment Routes
apiRouter.get('/api/v1/enrollment', controller.api.v1.enrollmentController.handleGetAllEnrollment);
apiRouter.post('/api/v1/enrollment', controller.api.v1.enrollmentController.handleCreateEnrollment);
apiRouter.post('/api/v1/enrollment/user', controller.api.v1.enrollmentController.handleFindEnrollment);
apiRouter.get('/api/v1/enrollment/:id', controller.api.v1.enrollmentController.handleGetEnrollment);
apiRouter.delete('/api/v1/enrollment/:id', controller.api.v1.enrollmentController.handleDeleteEnrollment);

//assignment Routes
apiRouter.post('/api/v1/assignment/course', controller.api.v1.assignmentController.handleFindAssignment);
apiRouter.post('/api/v1/assignment', upload.single("content"), controller.api.v1.assignmentController.handleCreateAssignment);
apiRouter.put('/api/v1/assignment/:id', controller.api.v1.assignmentController.handleUpdateAssignment);
apiRouter.get('/api/v1/assignment/:id', controller.api.v1.assignmentController.handleGetAssignment);
apiRouter.delete('/api/v1/assignment/:id', controller.api.v1.assignmentController.handleDeleteAssignment);

//submission Routes
apiRouter.post('/api/v1/submission/assignment', controller.api.v1.submissionController.handleFindSubmission);
apiRouter.post('/api/v1/submission', upload.single("content"), controller.api.v1.submissionController.handleCreateSubmission);
apiRouter.put('/api/v1/submission/:id', controller.api.v1.submissionController.handleUpdateSubmission);
apiRouter.get('/api/v1/submission/:id', controller.api.v1.submissionController.handleGetSubmission);
apiRouter.delete('/api/v1/submission/:id', controller.api.v1.submissionController.handleDeleteSubmission);

//notification Routes
apiRouter.post('/api/v1/notification/user', controller.api.v1.notificationController.handleFindNotification);
apiRouter.put('/api/v1/notification/:id', controller.api.v1.notificationController.handleUpdateNotification);

apiRouter.get("/file/:filename", controller.api.main.handleGetFile);
apiRouter.use(controller.api.main.onLost);
apiRouter.use(controller.api.main.onError);

module.exports = apiRouter;