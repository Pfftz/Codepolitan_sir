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

app.get("*", (req, res) => {
  res.send("I dont know that path");
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080/");
});
