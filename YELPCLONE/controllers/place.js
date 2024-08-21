const Place = require("../models/place");

module.exports.index = async (req, res) => {
    const places = await Place.find({});
    res.render("places/index", { places });
};

module.exports.store = async (req, res, next) => {
    const place = new Place(req.body.place);
    place.author = req.user._id;
    await place.save();
    req.flash("success_msg", "Successfully created a new place!");
    res.redirect(`/places`);
};

module.exports.show = async (req, res) => {
    const place = await Place.findById(req.params.id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        })
        .populate("author");
    res.render("places/show", { place });
};

module.exports.edit = async (req, res) => {
    const place = await Place.findById(req.params.id);
    res.render("places/edit", { place });
};

module.exports.update = async (req, res) => {
    const { id, title } = req.params;
    await Place.findByIdAndUpdate(id, { ...req.body.place });
    req.flash("success_msg", `Successfully edited ${title}!`);
    res.redirect(`/places/${id}`);
};

module.exports.destroy = async (req, res) => {
    const { id } = req.params;
    await Place.findByIdAndDelete(id);
    req.flash("success_msg", "Successfully deleted place!");
    res.redirect("/places");
};