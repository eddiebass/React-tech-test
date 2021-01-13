const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create new Schema and Model
const TyreSchema = new Schema({
	type: { type: String, required: true },
	size: { type: String, required: true },
	price: { type: Number, required: true },
});

const BrandSchema = new Schema({
	name: { type: String, required: true },
	model: { type: String, required: true },
	tyres: [TyreSchema],
});

const Brand = mongoose.model("brand", BrandSchema);

module.exports = Brand;
