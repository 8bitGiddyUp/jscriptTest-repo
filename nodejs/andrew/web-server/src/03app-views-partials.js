"use strict";

// to make nodemon to auto-refresh when .hbs, .js, etc changes, these extensions
// must be added to nodemon:
// nodemon src/app.js -e js,hbs

const path = require("path");
const express = require("express");
// to use "partials", hbs must be "require('hbs')"
const hbs = require("hbs");
const app = express();

console.log("  __dirname: ", __dirname);
console.log(" __filename: ", __filename);
console.log(path.join(__dirname, "../public"));

// tells express where to find the public path
const publicPath = path.join(__dirname, "../public");

// defines a custom views path
// with the inclusion of partials in the templates folder, the views folder is
// created; to point to this views, "views" is appended to the viewsPath var
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// sets up handlebars (hbs) engine and view location
app.set("views", viewsPath);
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

// defines path for static html pages
app.use(express.static(publicPath));

// accesses index.hbs
app.get("", (rq, rs) => {
  // the hbs view engine looks into the views and renders "index.hbs"
  rs.render("index", {
    title: "partials: hbs home weather app",
    name: "Jack Doors",
  });
});

// renders about.hbs
app.get("/about", (rq, rs) => {
  rs.render("about", {
    title: "partials: hbs about me",
    name: "yes, all about Jack Doors",
  });
});

// renders help.hbs
app.get("/help", (rq, rs) => {
  rs.render("help", {
    helpText: "hbs: this is some helpful text",
    title: "partials: hbs: help",
    name: "Jack Doors",
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
