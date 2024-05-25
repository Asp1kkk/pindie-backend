const gamesRouter = require("express").Router();

const { findAllGames, createGame, findGameById, updateGame } = require("../middlewares/games");
const { sendAllGames, sendCreatedGame, sendGameById, sendUpdatedGame } = require("../controllers/games");

gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.post("/games", findAllGames, createGame, sendCreatedGame);
gamesRouter.put("/games/:id", findGameById, updateGame, sendUpdatedGame);

module.exports = gamesRouter;
