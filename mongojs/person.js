const mongoose = require("mongoose");

mongoose
    .connect("mongodb://127.0.0.1:27017/shopApp")
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

const personSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
});

personSchema.virtual("fullName").get(function () {
    return `${this.firstName} ${this.lastName}`;
});

personSchema.pre("save", async function () {
    console.log("Persiapan data sebelum disimpan");
});

personSchema.post("save", async function () {
    console.log("Data berhasil disimpan");
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    firstName: "Harry",
    lastName: "Potter",
});

person
    .save()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });
