const game = require("../database/models/game");

const findAllGames = async (req, res, next) => {
	req.gamesArray = await game.find({});

	console.log(req.gamesArray);
	next();
};

module.exports = findAllGames;
