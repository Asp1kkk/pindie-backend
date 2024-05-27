const usersRouter = require("express").Router();

const { findAllUsers, createUser, findUserById, updateUser, deleteUser, hashPassword } = require("../middlewares/users");
const { sendAllUsers, sendCreatedUser, sendUserById, sendUpdatedUser, sendDeletedUser, sendMe } = require("../controllers/users");
const { checkIsUserExists, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail } = require("../middlewares/validate");
const { checkAuth } = require("../middlewares/auth");

usersRouter.post("/users", findAllUsers, checkIsUserExists, checkEmptyNameAndEmailAndPassword, checkAuth, hashPassword, createUser, sendCreatedUser);
usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.put("/users/:id", checkEmptyNameAndEmail, checkAuth, updateUser, sendUpdatedUser);
usersRouter.delete("/users/:id", checkAuth, deleteUser, sendDeletedUser);
usersRouter.get("/me", checkAuth, sendMe);

module.exports = usersRouter;
