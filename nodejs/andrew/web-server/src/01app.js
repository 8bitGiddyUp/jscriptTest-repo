"use strict";
const path = require("path");
const express = require("express");
const app = express();

console.log("  __dirname: ", __dirname);
console.log(" __filename: ", __filename);
console.log(path.join(__dirname, "../public"));

// tells express where to find the public path
const publicPath = path.join(__dirname, "../public");

// app.use replaces app.get
app.use(express.static(publicPath));

// app.com replaced by app.use(express.static(publicPath))
// app.get("", (rq, rs) => {
//   rs.send("<h1>hello my first express...</h1>");
// });

// app.com/help
// app.get("/help", (rq, rs) => {
//   rs.send([
//     {
//       name: "json",
//       age: 34,
//     },
//     {
//       name: "jackie",
//       age: 30,
//     },
//   ]);
// });

// app.com/about
// app.get("/about", (rq, rs) => {
//   rs.send("<h1>about page</h1>");
// });

// app.com/weather
app.get("/weather", (rq, rs) => {
  rs.send({
    forecast: "it will snow",
    location: "philadelphia",
  });
});

// starts a server
app.listen(3000, () => {
  console.log("server started on 3000...");
});
