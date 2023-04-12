const express = require('express');
const controller = require('../app/controllers');

const apiRouter = express.Router();

const inController = controller.api.v1;
apiRouter.get('/', controller.api.main.handleGetRoot);

//auth routes
apiRouter.post('/api/v1/register', controller.api.v1.authController.handleRegister);
apiRouter.post('/api/v1/login', controller.api.v1.authController.handleLogin);

apiRouter.use(controller.api.main.onLost);
apiRouter.use(controller.api.main.onError);

module.exports = apiRouter;