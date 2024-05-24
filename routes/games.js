const gamesRouter = require("express").Router();

const { findAllGames, createGame } = require("../middlewares/games");
const { sendAllGames, sendCreatedGame } = require("../controllers/games");

gamesRouter.post("/games", findAllGames, createGame, sendCreatedGame);

module.exports = gamesRouter;
