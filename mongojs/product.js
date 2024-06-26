const mongoose = require("mongoose");

mongoose
    .connect("mongodb://127.0.0.1:27017/shopApp")
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    color: { type: [String], required: true },
    size: { type: [String], required: true },
    description: { type: String, required: true, maxlength: 150 },
    condition: { type: String, enum: ["baru", "bekas"], default: "baru" },
    stock: { type: Number, required: true, min: 0 },
    availability: {
        online: { type: Boolean, required: true },
        offline: { type: Boolean, required: true },
    },
});

const Product = mongoose.model("Product", productSchema);

const product = new Product({
    name: "Kemeja Flanel",
    brand: "Hollister",
    price: 750000,
    color: "biru muda",
    size: ["S", "M", "L"],
    description:
        "Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.",
    condition: "baru",
    stock: 25,
    availability: {
        online: true,
        offline: true,
    },
});

// product
//     .save()
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// Product.deleteMany({ name: "Kemeja Flanel" })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// Product.findOneAndUpdate(
//     {
//         name: "Kemeja Flanel",
//     },
//     {
//         brand: "Hollister",
//         price: 850000,
//         color: "biru muda",
//         size: ["S", "M", "L"],
//         description:
//             "Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.",
//         condition: "baru",
//         stock: 25,
//         availability: {
//             online: true,
//             offline: true,
//         },
//     },
//     { new: true, runValidators: true }
// )
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
