const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/form.html"));
});

app.get("/script.js", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/main.js"));
});

app.listen(8080, () => {
  console.log("Server up and running on 8080");
});
