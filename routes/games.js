const gamesRouter = require("express").Router();

const { findAllGames, createGame, findGameById, updateGame, deleteGame } = require("../middlewares/games");
const { sendAllGames, sendCreatedGame, sendGameById, sendUpdatedGame, sendDeletedGame } = require("../controllers/games");
const { checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, checkIfUsersAreSafe } = require("../middlewares/validate");

gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.post("/games", findAllGames, checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, createGame, sendCreatedGame);
gamesRouter.put("/games/:id", findGameById, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, updateGame, sendUpdatedGame);
gamesRouter.delete("/games/:id", deleteGame, sendDeletedGame);

module.exports = gamesRouter;
