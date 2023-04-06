const express = require('express');

const apiRouter = express.Router();

apiRouter.use('/', ()=> {
    console.log("hello world");
});

module.exports = apiRouter;