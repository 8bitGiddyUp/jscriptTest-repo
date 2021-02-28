"use strict";
const path = require("path");
const express = require("express");
const app = express();

console.log("  __dirname: ", __dirname);
console.log(" __filename: ", __filename);
console.log(path.join(__dirname, "../public"));

// tells express where to find the public path
const publicPath = path.join(__dirname, "../public");

// defines a custom views path
const viewsPath = path.join(__dirname, "../templates");

// sets up handlebars (hbs) engine and view location
app.set("views", viewsPath);
app.set("view engine", "hbs");

// defines path for static html pages
app.use(express.static(publicPath));

// accesses index.hbs
app.get("", (rq, rs) => {
  // the hbs view engine looks into the views and renders "index.hbs"
  rs.render("index", {
    title: "hbs weather app",
    name: "Jack Doors",
  });
});

// renders about.hbs
app.get("/a", (rq, rs) => {
  rs.render("about", {
    title: "hbs about me",
    name: "yes, all about me",
  });
});

// renders help.hbs
app.get("/help", (rq, rs) => {
  rs.render("help", {
    helpText: "hbs: this is some helpful text",
  });
});

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
