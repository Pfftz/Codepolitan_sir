const express = require("express");
const app = express();

app.use((req, res) => {
  console.log("We got a new request!");
  res.send({ message: "Hello, World!" });
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080/");
});
