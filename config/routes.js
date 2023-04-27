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


apiRouter.use(controller.api.main.onLost);
apiRouter.use(controller.api.main.onError);

module.exports = apiRouter;