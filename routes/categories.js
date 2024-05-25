const categoriesRouter = require("express").Router();

const { findAllCategories, createCategory, findCategoryById, updateCategory } = require("../middlewares/categories");
const { sendAllCategories, sendCreatedCategory, sendCategoryById, sendUpdatedCategory } = require("../controllers/categories");

categoriesRouter.post("/categories", findAllCategories, createCategory, sendCreatedCategory);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.put("/categories/:id", updateCategory, sendUpdatedCategory);

module.exports = categoriesRouter;
