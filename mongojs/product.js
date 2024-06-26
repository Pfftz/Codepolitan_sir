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
    price: { type: Number, required: true, min: 0},
    color: { type: [String], required: true },
    size: { type: [String], required: true },
    description: { type: String, required: true, maxlength: 150},
    condition: { type: String, enum: ["new", "used"], default: "new"},
    stock: { type: Number, required: true, min: 0},
    availability: {
        online: { type: Boolean, required: true },
        offline: { type: Boolean, required: true }
    },
});

const Product = mongoose.model("Product", productSchema);

const tshirt = new Product({ name: "ORIGOTOT", price: 500000 });

// tshirt
//     .save()
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// Product.deleteOne({ name: "ORIGOTOT" })
//     .then((result) => {
//         console.log("Delete operation successful", result);
//     })
//     .catch((err) => {
//         console.log("Error during delete operation", err);
//     });
