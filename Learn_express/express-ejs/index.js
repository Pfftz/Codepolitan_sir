const path = require("path");
const express = require("express");
const app = express();

const tagsData = require("./data.json");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/cats", (req, res) => {
    const cats = ["Blue", "Rocket", "Monty", "Stephanie", "Winston"];
    res.render("cats", { cats });
});

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num });
});

app.get('/t/:tag', (req, res) => {
    const { tag } = req.params;
    const data = tagsData[tag];
    if(data){
        res.render('tag', { data });
    }else{
        res.render('tag', { tag: 'NO SUCH TAG' });
    }
});

app.listen(8080, () => {
    console.log(`Server started on http://localhost:8080`);
    console.log(`Press Ctrl+C to stop`);
    console.log(path.join(__dirname, "views"));
});

