const gamesRouter = require("express").Router();

const { findAllGames, createGame, findGameById } = require("../middlewares/games");
const { sendAllGames, sendCreatedGame, sendGameById } = require("../controllers/games");

gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.post("/games", findAllGames, createGame, sendCreatedGame);

module.exports = gamesRouter;
