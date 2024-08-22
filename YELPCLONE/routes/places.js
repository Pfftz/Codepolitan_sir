const express = require("express");
const Place = require("../models/place");
const PlaceController = require("../controllers/place");
const wrapAsync = require("../utils/wrapAsync");
const isValidObjectId = require("../middlewares/isValidObjectId");
const isAuth = require("../middlewares/isAuth");
const { isAuthorPlace } = require("../middlewares/isAuthor");
const { validatePlace } = require("../middlewares/validator");
const upload = require("../config/multer");

const router = express.Router();

router
    .route("/")
    .get(wrapAsync(PlaceController.index))
    .post(isAuth, validatePlace, wrapAsync(PlaceController.store));

router.get("/create", isAuth, (req, res) => {
    res.render("places/create");
});

router
    .route("/:id")
    .get(isValidObjectId("/places"), wrapAsync(PlaceController.show))
    .put(
        isAuth,
        isAuthorPlace,
        isValidObjectId("/places"),
        validatePlace,
        wrapAsync(PlaceController.update)
    )
    .delete(
        isAuth,
        isAuthorPlace,
        isValidObjectId("/places"),
        wrapAsync(PlaceController.destroy)
    );

router.get(
    "/:id/edit",
    isAuth,
    isAuthorPlace,
    isValidObjectId("/places"),
    wrapAsync(PlaceController.edit)
);

module.exports = router;
