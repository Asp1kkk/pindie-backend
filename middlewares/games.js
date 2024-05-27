const games = require("../database/models/game");

const findAllGames = async (req, res, next) => {
	if (req.query["categories.name"]) {
		req.gamesArray = await games.findGameByCategory(req.query["categories.name"]);
		next();
		return;
	}

	req.gamesArray = await games.find({}).populate("categories").populate({
		path: "users",
		select: "-password",
	});
	next();
};

const createGame = async (req, res, next) => {
	console.log("method: POST\nendpoint: /games");
	try {
		req.game = await games.create(req.body);
		next();
	} catch (error) {
		res.setHeader("Content-Type", "application/json");
		res.status(400).send(JSON.stringify({ message: "Ошибка создания игры" }));
		console.error(error);
	}
	console.log("- - - - - - - - -");
};

const findGameById = async (req, res, next) => {
	try {
		req.game = await games.findById(req.params.id).populate("categories").populate({ path: "users", select: "-password" });
		next();
	} catch (error) {
		res.setHeader("Content-Type", "application/json");
		res.status(404).send(JSON.stringify({ message: "Игра не найдена" }));
	}
};

const updateGame = async (req, res, next) => {
	try {
		req.game = await games.findByIdAndUpdate(req.params.id, req.body);
		next();
	} catch (error) {
		res.setHeader("Content-Type", "application/json");
		res.status(400).send(JSON.stringify({ message: "Ошибка обновления игры" }));
	}
};

const deleteGame = async (req, res, next) => {
	try {
		req.game = await games.findByIdAndDelete(req.params.id);
		next();
	} catch (error) {
		res.setHeader("Content-Type", "application/json");
		res.status(400).send(JSON.stringify({ message: "Ошибка удаления игры" }));
	}
};

const checkIsVoteRequest = async (req, res, next) => {
	if (Object.keys(req.body).length === 1 && req.body.users) {
		req.isVoteRequest = true;
	}
	next();
};

module.exports = { findAllGames, createGame, findGameById, updateGame, deleteGame, checkIsVoteRequest };
