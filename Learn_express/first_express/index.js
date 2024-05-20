const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("We got a new request!");
//   res.send({ message: "Hello, World!" });
// });

app.get("/", (req, res) => {
    res.send("Welcome to the home page!");
});

app.get("/cats", (req, res) => {
    res.send("MEOW!!");
});

app.post("/cats", (req, res) => {
    res.send("This is a POST request!");
});

app.get("/dogs", (req, res) => {
    res.send("WOOF!!");
});

app.get("/about", (req, res) => {
    res.send("This is the about page!");
});

app.get("/blog/:judul", (req, res) => {
    const { judul } = req.params;
    res.send(`kita sedang membaca artikel dengan judul: ${judul}`);
});

app.get("/blog/:category/:judul/:author", (req, res) => {
    const { judul, category, author } = req.params;
    res.send(
        `Blog dengan kategori: ${category} | Author: ${author} | ${judul}`
    );
});

app.get("/search", (req, res) => {
    // console.log(req.query);
    const { q } = req.query;
    if (!q) {
        res.send(`<h1>Nothing found if nothing searched</h1>`);
    }
    res.send(`<h1>Search results for: ${q}</h1>`);
});

app.get("*", (req, res) => {
    res.send("I dont know that path");
});

app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080/");
});
