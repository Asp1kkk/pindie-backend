const categoriesRouter = require("express").Router();

const { findAllCategories, createCategory, findCategoryById } = require("../middlewares/categories");
const { sendAllCategories, sendCreatedCategory, sendCategoryById } = require("../controllers/categories");

categoriesRouter.post("/categories", findAllCategories, createCategory, sendCreatedCategory);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);

module.exports = categoriesRouter;
