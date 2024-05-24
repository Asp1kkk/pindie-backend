const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mainRoute = require("./routes/main");
const usersRouter = require("./routes/users");
const gamesRouter = require("./routes/games");
const categoriesRouter = require("./routes/categories");

const app = express();

const { cors } = require("./middlewares/cors");
const connectToDatabase = require("./database/connect");

connectToDatabase();

app.use(cors, bodyParser.json(), express.static(path.join(__dirname, "public")), mainRoute, usersRouter, gamesRouter, categoriesRouter);

app.listen(3000, () => {
	console.log(`App is listened on PORT: ${3000}`);
});
