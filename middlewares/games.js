const game = require("../database/models/game");

const findAllGames = async (req, res, next) => {
	req.gamesArray = await game.find({}).populate("categories").populate("users");

	next();
};

const createGame = async (req, res, next) => {
	console.log("method: POST\nendpoint: /games");
	try {
		req.game = await game.create(req.body);
	} catch (error) {
		res.setHeader("Content-Type", "application/json");
		res.status(400).send(JSON.stringify({ message: "Ошибка создания игры" }));
		console.error(error);
	}
	console.log("- - - - - - - - -");
};

module.exports = { findAllGames, createGame };
