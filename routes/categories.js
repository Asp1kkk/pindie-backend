const categoriesRouter = require("express").Router();

const { findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory } = require("../middlewares/categories");
const { sendAllCategories, sendCreatedCategory, sendCategoryById, sendUpdatedCategory, sendDeletedCategory } = require("../controllers/categories");

categoriesRouter.post("/categories", findAllCategories, createCategory, sendCreatedCategory);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.put("/categories/:id", updateCategory, sendUpdatedCategory);
categoriesRouter.delete("/categories/:id", deleteCategory, sendDeletedCategory);

module.exports = categoriesRouter;
