const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
const app = express();
const postRoute = require("./routes/tyres");

app.use(cors());
app.use(bodyParser.json());
app.use("/tyre", postRoute);

mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log("CONNECTED TO DB")
);

app.listen(3000);
