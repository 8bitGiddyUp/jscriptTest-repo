const path = require("path");
const express = require("express");

console.log("__dirname: ", __dirname);
console.log("path.join: ", path.join(__dirname, "../public"));

const app = express();

// helps access public/index.html
const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));

app.get("/weather", (req, res) => {
  res.send({ forecast: "sunny and mild", location: "boston" });
});

// to start an express server
app.listen(3000, () => {
  console.log("server is up on port 3000");
});
