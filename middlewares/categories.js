const categories = require("../database/models/category");

const findAllCategories = async (req, res, next) => {
	req.categoriesArray = await categories.find({});
	next();
};

const createCategory = async (req, res, next) => {
	console.log("method: POST\nendpoint: /categories");
	try {
		console.log(req.body);
		req.category = await categories.create(req.body);
		next();
	} catch (error) {
		res.setHeader("Content-Type", "application/json");
		res.status(400).send(JSON.stringify({ message: "Ошибка создания категории" }));
		console.error(error);
	}
	console.log("- - - - - - -");
};

module.exports = { findAllCategories, createCategory };
