const express = require("express");
const Place = require("../models/place");
const { placeSchema } = require("../schemas/place");
const ErrorHandler = require("../utils/ErrorHandler");
const wrapAsync = require("../utils/wrapAsync");

const router = express.Router();

const validatePlace = (req, res, next) => {
    const { error } = placeSchema.validate(req.body);
    if (error) {
        const msg = error.details.map((el) => el.message).join(",");
        return next(new ErrorHandler(msg, 400));
    } else {
        next();
    }
};

router.get(
    "/",
    wrapAsync(async (req, res) => {
        const places = await Place.find();
        res.render("places/index", { places });
    })
);

router.get("/create", (req, res) => {
    res.render("places/create");
});

router.post(
    "/",
    validatePlace,
    wrapAsync(async (req, res, next) => {
        const place = new Place(req.body.place);
        await place.save();
        req.flash("success_msg", "Successfully created a new place!");
        res.redirect(`/places`);
    })
);

router.get(
    "/:id",
    wrapAsync(async (req, res) => {
        const place = await Place.findById(req.params.id).populate("reviews");
        res.render("places/show", { place });
    })
);

router.get(
    "/:id/edit",
    wrapAsync(async (req, res) => {
        const place = await Place.findById(req.params.id);
        res.render("places/edit", { place });
    })
);

router.put(
    "/:id",
    validatePlace,
    wrapAsync(async (req, res) => {
        const { id } = req.params;
        const place = await Place.findByIdAndUpdate(id, { ...req.body.place });
        res.redirect(`/places/${place.id}`);
    })
);

router.delete(
    "/:id",
    wrapAsync(async (req, res) => {
        const { id } = req.params;
        await Place.findByIdAndDelete(id);
        res.redirect("/places");
    })
);

module.exports = router;
