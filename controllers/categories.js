const sendAllCategories = (req, res) => {
	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify(req.categoriesArray));
};

const sendCreatedCategory = (req, res) => {
	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify(req.category));
};

module.exports = { sendAllCategories, sendCreatedCategory };
