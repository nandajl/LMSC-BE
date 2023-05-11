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

//company routes
apiRouter.post('/api/v1/company', controller.api.v1.companyController.handleCreateCompany);
apiRouter.put('/api/v1/company:id', controller.api.v1.companyController.handleUpdateCompany);
apiRouter.get('/api/v1/company:id', controller.api.v1.companyController.handleGetCompany);
apiRouter.get('/api/v1/company', controller.api.v1.companyController.handleFindCompany);

//Grup routes
apiRouter.get('/api/v1/grup', controller.api.v1.grupController.handleGetAllGrup);
apiRouter.post('/api/v1/grup', controller.api.v1.grupController.handleCreateGrup);
apiRouter.put('/api/v1/grup/:id', controller.api.v1.grupController.handleUpdateGrup);
apiRouter.get('/api/v1/grup/:id', controller.api.v1.grupController.handleGetGrup);
apiRouter.delete('/api/v1/grup/:id', controller.api.v1.grupController.handleDeleteGrup);


apiRouter.use(controller.api.main.onLost);
apiRouter.use(controller.api.main.onError);

module.exports = apiRouter;