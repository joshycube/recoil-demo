const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const items = require("./items");

const app = express();

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.static("dist"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/api/items", (req, res) => res.send({ items }));

app.post("/api/items/filter", (req, res) => {
  const pattern = req.body.keyword
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return `(?=.*${word})`;
    })
    .join("");

  const regex = new RegExp(`${pattern}`, "g");

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().match(regex)
  );

  return res.send({ items: filteredItems });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
