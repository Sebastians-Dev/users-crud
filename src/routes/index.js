const express = require('express');
const UserRouter = require('./User.router');
const router = express.Router();

// colocar las rutas aquí
router.use(UserRouter);

module.exports = router;