const path = require("path");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num });
});

app.listen(8080, () => {
    console.log(`Server started on http://localhost:8080`);
    console.log(`Press Ctrl+C to stop`);
    console.log(path.join(__dirname, "views"));
});

