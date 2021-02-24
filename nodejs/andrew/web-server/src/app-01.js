const path = require("path");
const express = require("express");
const app = express();

const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

// node routes
// app.com
// with app.use(express.static(publicPath)), app.get("") is no longer needed
// app.get("", (rqst, rspns) => {
//   rspns.send("hello express home page <h1>OH YEAH</h1>");
// });

// app.com/help
// const helpPath = path.join(__dirname, "../public/help");
// app.use(express.static(helpPath));
// app.get("/help", (rqst, rspns) => {
//   rspns.send([
//     {
//       name: "andrew",
//       age: 27,
//     },
//     {
//       name: "sandy",
//       age: 21,
//     },
//   ]);
// });

// app.com/about
// const aboutPath = path.join(__dirname, "../public/about");
// app.use(express.static(aboutPath));
// app.get("/about", (rqst, rspns) => {
//   rspns.send("<h1>it is all about you</h1>");
// });

// app.com/weather
// const weatherPath = path.join(__dirname, "../public/weather");
// app.use(express.static(weatherPath));
// app.get("/weather", (rqst, rspns) => {
//   rspns.send({
//     forecast: "it is snowing",
//     location: "philadelphia",
//   });
// });

// opens a web-server at port 3000
app.listen(3000, () => {
  console.log("server is up on port 3000");
});
