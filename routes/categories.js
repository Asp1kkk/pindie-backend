const categoriesRouter = require("express").Router();

const { findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory } = require("../middlewares/categories");
const { sendAllCategories, sendCreatedCategory, sendCategoryById, sendUpdatedCategory, sendDeletedCategory } = require("../controllers/categories");
const { checkIsCategoryExists, checkEmptyName } = require("../middlewares/validate");
const { checkAuth } = require("../middlewares/auth");

categoriesRouter.post("/categories", findAllCategories, checkIsCategoryExists, checkEmptyName, checkAuth, createCategory, sendCreatedCategory);
categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.put("/categories/:id", checkEmptyName, checkAuth, updateCategory, sendUpdatedCategory);
categoriesRouter.delete("/categories/:id", checkAuth, deleteCategory, sendDeletedCategory);

module.exports = categoriesRouter;
