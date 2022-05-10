const express = require("express");
const cookieParser = require("cookie-parser");

const Database = require("./config/database");
const errorMiddle = require("./middleware/error");

const app  = express();
app.use(express.json());
app.use(cookieParser());

//Routes
const products = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

app.use("/api/v1",products);
app.use("/api/v1",user);
app.use("/api/v1",order);

//Error Middleware
app.use(errorMiddle);

module.exports = app;