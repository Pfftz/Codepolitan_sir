const express = require("express");
const Place = require("../models/place");
const { placeSchema } = require("../schemas/place");
const ErrorHandler = require("../utils/ErrorHandler");
const wrapAsync = require("../utils/wrapAsync");
const isValidObjectId = require("../middlewares/isValidObjectId");
const isAuth = require("../middlewares/isAuth");

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

router.get("/create", isAuth, (req, res) => {
    res.render("places/create");
});

router.post(
    "/",
    isAuth,
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
    isValidObjectId("/places"),
    wrapAsync(async (req, res) => {
        const place = await Place.findById(req.params.id).populate("reviews").populate("author");
        res.render("places/show", { place });
    })
);

router.get(
    "/:id/edit",
    isAuth,
    isValidObjectId("/places"),
    wrapAsync(async (req, res) => {
        const place = await Place.findById(req.params.id);
        res.render("places/edit", { place });
    })
);

router.put(
    "/:id",
    isAuth,
    isValidObjectId("/places"),
    validatePlace,
    wrapAsync(async (req, res) => {
        const { id, title } = req.params;
        let place = await Place.findById(id);
        if (!place.author.equals(req.user._id)) {
            req.flash("error_msg", "You don't have permission to do that!");
            return res.redirect(`/places/${id}`);
        }
        await Place.findByIdAndUpdate(id, { ...req.body.place });
        req.flash("success_msg", `Successfully edited ${title}!`);
        res.redirect(`/places/${id}`);
    })
);

router.delete(
    "/:id",
    isAuth,
    isValidObjectId("/places"),
    wrapAsync(async (req, res) => {
        const { id } = req.params;
        await Place.findByIdAndDelete(id);
        req.flash("success_msg", "Successfully deleted place!");
        res.redirect("/places");
    })
);

module.exports = router;
