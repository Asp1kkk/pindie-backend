const { sendIndex, sendDashboard } = require("../controllers/auth");
const { checkCookiesJWT, checkAuth } = require("../middlewares/auth");

const pagesRouter = require("express").Router();

pagesRouter.get("/", sendIndex);
pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard);

module.exports = pagesRouter;
