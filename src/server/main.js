const express = require("express");
const ViteExpress = require("vite-express");
const { runSearch } = require('./db.js')

const app = express();

app.get("/api", (req, res) => {
  res.json("hello");
});

app.get("/api/search/:query", (req, res) => {
  console.log(req.params.query);

  runSearch(req.params.query)
    .then(result => {console.log(result); res.status(200).json(result)})
    .catch(err => res.status(500).json(err));

});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
