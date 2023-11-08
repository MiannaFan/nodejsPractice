const express = require("express");
const bookRoute = require("./routes/bookRoute");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bookRoute);
module.exports = app;
