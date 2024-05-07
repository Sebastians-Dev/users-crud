const { getAll, create, getOne, remove, update } = require('../controllers/user.controllers');
const express = require('express');

const UserRouter = express.Router();

UserRouter.route("/users")
		.get(getAll)
        .post(create);
UserRouter.route("/users/:id")
        .get(getOne)
        .delete(remove)
        .put(update);


module.exports = UserRouter;