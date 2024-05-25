const usersRouter = require("express").Router();

const { findAllUsers, createUser, findUserById, updateUser, deleteUser } = require("../middlewares/users");
const { sendAllUsers, sendCreatedUser, sendUserById, sendUpdatedUser, sendDeletedUser } = require("../controllers/users");
const { checkIsUserExists, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail } = require("../middlewares/validate");

usersRouter.post("/users", findAllUsers, checkIsUserExists, checkEmptyNameAndEmailAndPassword, createUser, sendCreatedUser);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.put("/users/:id", checkEmptyNameAndEmail, updateUser, sendUpdatedUser);
usersRouter.delete("/users/:id", deleteUser, sendDeletedUser);

module.exports = usersRouter;
