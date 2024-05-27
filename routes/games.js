const gamesRouter = require("express").Router();

const { findAllGames, createGame, findGameById, updateGame, deleteGame } = require("../middlewares/games");
const { sendAllGames, sendCreatedGame, sendGameById, sendUpdatedGame, sendDeletedGame } = require("../controllers/games");
const { checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, checkIfUsersAreSafe } = require("../middlewares/validate");
const checkAuth = require("../middlewares/auth");

gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post("/games", findAllGames, checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth, createGame, sendCreatedGame);
gamesRouter.put("/games/:id", findGameById, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth, updateGame, sendUpdatedGame);
gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendDeletedGame);

module.exports = gamesRouter;
