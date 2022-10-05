const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

const data = require("./data.json");
app.use(express.json());

function addUniqueID(arr) {
  arr.forEach((obj, i) => {
    obj.id = i;
  });
  return arr;
}

app.get("/", (req, res) => {
  return res.json({
    message: "Horror Movies API",
  });
});

//any random
app.get("/random", (req, res) => {
  const numberOfElements = data.length;
  const randomNumber = parseInt(Math.random() * numberOfElements);
  return res.json(data[randomNumber]);
});

app.get("/fix-order", (req, res) => {
  const dataOrdered = addUniqueID(data);
  fs.writeFileSync("data.json", JSON.stringify(dataOrdered));
  res.json(dataOrdered);
});

//list

app.listen(PORT, () => {
  console.log("Server has stated");
});

module.exports = app;
