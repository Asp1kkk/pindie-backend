const usersRouter = require("express").Router();

const { findAllUsers, createUser, findUserById } = require("../middlewares/users");
const { sendAllUsers, sendCreatedUser, sendUserById } = require("../controllers/users");

usersRouter.post("/users", findAllUsers, createUser, sendCreatedUser);
usersRouter.get("/users/:id", findUserById, sendUserById);

module.exports = usersRouter;
