const usersRouter = require("express").Router();

const { findAllUsers, createUser, findUserById, updateUser, deleteUser } = require("../middlewares/users");
const { sendAllUsers, sendCreatedUser, sendUserById, sendUpdatedUser, sendDeletedUser } = require("../controllers/users");

usersRouter.post("/users", findAllUsers, createUser, sendCreatedUser);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.put("/users/:id", updateUser, sendUpdatedUser);
usersRouter.delete("/users/:id", deleteUser, sendDeletedUser);

module.exports = usersRouter;
