module.exports = (req, res, next) => {
    if (!req.isAuthenticated()) {
        // Corrected the spelling mistake from isAunthenticated to isAuthenticated
        req.flash("error_msg", "You are not logged in");
        return res.redirect("/login"); // Added return to prevent calling next() after redirect
    }
    next();
};
