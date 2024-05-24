const usersRouter = require("express").Router();

const { findAllUsers, createUser } = require("../middlewares/users");
const { sendAllUsers, sendCreatedUser } = require("../controllers/users");

usersRouter.post("/users", findAllUsers, createUser, sendCreatedUser);

module.exports = usersRouter;
