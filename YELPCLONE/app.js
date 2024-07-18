//mongod --dbpath="c:\data\db"
const ejsMate = require("ejs-mate");
const express = require("express");
const methodOverride = require("method-override");
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

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/places", async (req, res) => {
    const places = await Place.find();
    res.render("places/index", { places });
});

app.get("/places/create", (req, res) => {
    res.render("places/create");
});

app.post("/places", async (req, res) => {
    const place = new Place(req.body.place);
    try {
        await place.save();
        res.redirect(`/places/${place.id}`);
    } catch (err) {
        res.send(err);
    }
});

app.get("/places/:id", async (req, res) => {
    const place = await Place.findById(req.params.id);
    res.render("places/show", { place });
});

app.get("/places/:id/edit", async (req, res) => {
    const place = await Place.findById(req.params.id);
    res.render("places/edit", { place });
});

app.put("/places/:id", async (req, res) => {
    const { id } = req.params;
    const place = await Place.findByIdAndUpdate(id, { ...req.body.place });
    res.redirect(`/places/${place.id}`);
});

app.delete("/places/:id", async (req, res) => {
    const { id } = req.params;
    await Place.findByIdAndDelete(id);
    res.redirect("/places");
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
