const users = require("../database/models/user");
const bcrypt = require("bcryptsjs");

const findAllUsers = async (req, res, next) => {
	req.usersArray = await users.find({}, { password: 0 });
	next();
};

const createUser = async (req, res, next) => {
	console.log("method: POST\nendpoint: /users");
	try {
		console.log(req.body);
		req.user = await users.create(req.body);
		next();
	} catch (error) {
		res.setHeader("Content-Type", "application/json");
		res.status(400).send(JSON.stringify({ message: "Ошибка создания пользователя" }));
		console.error(error);
	}
	console.log("- - - - - - -");
};

const findUserById = async (req, res, next) => {
	try {
		req.user = await users.findById(req.params.id, { password: 0 });
		next();
	} catch (error) {
		res.setHeader("Content-Type", "application/json");
		res.status(404).send(JSON.stringify({ message: "Пользователь не найден" }));
	}
};

const updateUser = async (req, res, next) => {
	try {
		req.user = await users.findByIdAndUpdate(req.params.id, req.body);
		next();
	} catch (error) {
		res.setHeader("Content-Type", "application/json");
		res.status(400).send(JSON.stringify({ message: "Ошибка обновления пользователя" }));
	}
};

const deleteUser = async (req, res, next) => {
	try {
		req.user = await users.findByIdAndDelete(req.params.id);
		next();
	} catch (error) {
		res.setHeader("Content-Type", "application/json");
		res.status(400).send(JSON.stringify({ message: "Ошибка удаления пользователя" }));
	}
};

const hashPassword = async (req, res, next) => {
	try {
		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(req.body.password, salt);
		req.body.password = hash;
		next();
	} catch (error) {
		res.status(400).send({ message: "Ошибка хеширования пароля" });
	}
};

module.exports = { findAllUsers, createUser, findUserById, updateUser, deleteUser, hashPassword };
