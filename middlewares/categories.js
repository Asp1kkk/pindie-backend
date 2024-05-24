const categories = require("../database/models/category");

const findAllCategories = async (req, res, next) => {
	req.categoriesArray = await categories.find({});
	next();
};

module.exports = findAllCategories;
