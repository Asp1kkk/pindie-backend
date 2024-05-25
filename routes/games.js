const gamesRouter = require("express").Router();

const { findAllGames, createGame, findGameById, updateGame, deleteGame } = require("../middlewares/games");
const { sendAllGames, sendCreatedGame, sendGameById, sendUpdatedGame, sendDeletedGame } = require("../controllers/games");

gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.post("/games", findAllGames, createGame, sendCreatedGame);
gamesRouter.put("/games/:id", findGameById, updateGame, sendUpdatedGame);
gamesRouter.delete("/games/:id", deleteGame, sendDeletedGame);

module.exports = gamesRouter;
