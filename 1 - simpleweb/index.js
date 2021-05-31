const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi There");
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server has started at ${port}`);
});
