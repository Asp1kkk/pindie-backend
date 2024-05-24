const sendAllUsers = (req, res) => {
	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify(req.usersArray));
};

const sendCreatedUser = (req, res) => {
	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify(req.user));
};

module.exports = { sendAllUsers, sendCreatedUser };
