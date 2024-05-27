const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

const { cors } = require("./middlewares/cors");
const connectToDatabase = require("./database/connect");
const apiRouter = require("./routes/api");
const pagesRouter = require("./routes/pages");

connectToDatabase();

app.use(cors, cookieParser(), bodyParser.json(), pagesRouter, apiRouter, express.static(path.join(__dirname, "public")));

app.listen(3001, () => {
	console.log(`App is listened on PORT: ${3001}`);
});
