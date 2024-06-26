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

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    firstName: "Harry",
    lastName: "Potter",
});

console.log(person.fullName);