const express = require("express");
const router = express.Router();
const Brand = require("../models/Tyres");

router.post("/", (req, res) => {
	const brand = new Brand({
		name: req.body.name,
		model: req.body.model,
		tyres: [
			{
				type: req.body.tyres[0].type,
				size: req.body.tyres[0].size,
				price: req.body.tyres[0].price,
			},
		],
	});

	brand
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json({ message: err });
		});
});

router.get("/", async (req, res) => {
	try {
		const brand = await Brand.find();
		res.json(brand);
	} catch (error) {
		res.json({ message: error.message });
	}
});

module.exports = router;
