const categoriesRouter = require("express").Router();

const { findAllCategories, createCategory } = require("../middlewares/categories");
const { sendAllCategories, sendCreatedCategory } = require("../controllers/categories");

categoriesRouter.post("/categories", findAllCategories, createCategory, sendCreatedCategory);

module.exports = categoriesRouter;
