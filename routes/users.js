const usersRouter = require("express").Router();

const { findAllUsers, createUser, findUserById, updateUser } = require("../middlewares/users");
const { sendAllUsers, sendCreatedUser, sendUserById, sendUpdatedUser } = require("../controllers/users");

usersRouter.post("/users", findAllUsers, createUser, sendCreatedUser);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.put("/users/:id", updateUser, sendUpdatedUser);

module.exports = usersRouter;
