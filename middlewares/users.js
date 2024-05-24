const users = require("../database/models/user");

const findAllUsers = async (req, res, next) => {
	req.usersArray = await users.find({});
	next();
};

module.exports = findAllUsers;
