const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

//models
const Place = require("./models/place");

//connect to mongodb
mongoose
    .connect("mongodb://127.0.0.1/bestpoints")
    .then((result) => {
        console.log("Mongodb connected");
    })
    .catch((err) => {
        console.log("Mongodb connection error", err);
    });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/places", async (req, res) => {
    const places = await Place.find();
    res.render("places/index", { places });
});

// app.get("/seed/place", async (req, res) => {
//     const place = new Place({
//         title: "Empire State Building",
//         price: 1000,
//         description: "This is the baddest building in the world",
//         location: "New York",
//     });

//     try {
//         const newPlace = await place.save();
//         res.send(newPlace);
//     } catch (err) {
//         res.send(err);
//     }
// });

app.listen(3000, () => {
    console.log("Server is running on port http://127.0.0.1:3000");
});
