const path = require("path");
const express = require("express");

console.log("__dirname: ", __dirname);
console.log("path.join: ", path.join(__dirname, "../public"));

const app = express();

// helps access public/index.html
const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));

// app.com
// app.com/help
// app.com/about

// due to public/index.html, this app.get() is no longer executed
// app.get("", (req, res) => {
//   res.send("<h1>weather!!!</h1>");
// });

app.get("/help", (req, res) => {
  // res.send("HELP PAGE");
  // res.send({ name: "andrew", age: 27 });
  res.send([
    { name: "andrew", age: 27 },
    { name: "sarah", age: 32 },
  ]);
});

app.get("/about", (req, res) => {
  res.send("<h1>about page</h1>");
});

app.get("/weather", (req, res) => {
  res.send({ forecast: "sunny and mild", location: "boston" });
});

// to start an express server
app.listen(3000, () => {
  console.log("server is up on port 3000");
});
