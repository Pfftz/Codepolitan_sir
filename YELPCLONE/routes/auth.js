const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");

router.get("/register", (req, res) => {
    res.render("auth/register");
});

router.post(
    "/register",
    wrapAsync(async (req, res, next) => {
        try {
            const { email, username, password } = req.body;
            const user = new User({ email, username });
            await User.register(user, password);
            req.flash("success_msg", "Welcome to BestPoints");
            res.redirect("/login");
        } catch (err) {
            req.flash("error_msg", err.message);
            res.redirect("/register");
        }
    })
);

router.get("/login", (req, res) => {
    res.render("auth/login");
});

router.post(
    "/login",
    passport.authenticate("local", {
        failureFlash: {
            type: "error_msg",
            message: "Invalid username or password",
        },
        failureRedirect: "/login",
    }),
    (req, res) => {
        req.flash("success_msg", "Welcome back!");
        res.redirect("/places");
    }
);

module.exports = router;
