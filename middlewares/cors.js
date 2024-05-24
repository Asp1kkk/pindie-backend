const cors = (req, res, next) => {
	console.log(req.headers);
	const { origin } = req.headers;
	console.log(origin);
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	next();
};

module.exports = { cors };
