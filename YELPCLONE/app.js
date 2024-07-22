//mongod --dbpath="c:\data\db"
const ejsMate = require("ejs-mate");
const express = require("express");
const ErrorHandler = require("./utils/ErrorHandler");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

//connect to mongodb
mongoose
    .connect("mongodb://127.0.0.1/bestpoints")
    .then((result) => {
        console.log("Mongodb connected");
    })
    .catch((err) => {
        console.log("Mongodb connection error", err);
    });

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
    res.render("home");
});

app.use("/places", require("./routes/places"));
app.use("/places/:place_id/reviews", require("./routes/reviews"));

app.all("*", (req, res, next) => {
    next(new ErrorHandler("Page not found", 404));
});

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Something went wrong";
    res.status(statusCode).render("error", { err });
});

app.listen(3000, () => {
    console.log("Server is running on port http://127.0.0.1:3000");
});
