// makes nodemon to recognize 'hbs'
// nodemon src/app.js -e js,hbs
// function prompt{"> "}

const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

console.log("__dirname: ", __dirname);
console.log("path.join: ", path.join(__dirname, "../public"));

const app = express();

// helps access public/index.html
const publicDirectoryPath = path.join(__dirname, "../public");

// "templates" replaces "views" for hbs
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// lets node to know which template engine to use "hbs" handlebars;
// moreover, it uses "view" folder and recognizes ".hbs" files; the "public"
// folder is no longer the main webpage folder;
// "public/index.html" is removed since "view/index.hbs" replaces it;
// handlebars is use to inject dynamic values to HTML code outputs;
app.set("view engine", "hbs");

// sets "templates" as the new "views"
app.set("views", viewsPath);

// registers the "partials" path for hbs
hbs.registerPartials(partialsPath);

// sets up static directory to serve
app.use(express.static(publicDirectoryPath));

// lets webpage to start at "views/index.hbs";
// make sure to delete or rename "public/index.html" so that the web-server
// doesn't find the static "public/index.html"
app.get("", (req, res) => {
  res.render("index", {
    title: "weatherrrrr app",
    name: "john weather",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "about hbs",
    name: "john about",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "help hbs",
    helpText: "this is your help page",
    name: "john help",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "you must provide an address... /weather?address=<>",
    });
  }

  geocode(req.query.address, (e, { lat, lon, location } = {}) => {
    if (e) {
      // return res.send("ERROR: address is wrong... ", e);
      return res.status(404).send(e);
      // return res.status(404).render("404", {
      //   title: "404",
      //   name: "ADDRESS",
      //   errorMessage: "ADDRESS IS WRONG: " + e,
      // });
    }

    forecast({ lat, lon, location }, (e, wdata) => {
      if (e) {
        // return res.send("ERROR: weather data is wrong...", e);
        return res.status(404).send("<h1>ERROR: weather data is wrong...</h1>");
      }

      console.log("wdata: ", wdata);
      res.send({
        forecast: wdata,
        location,
        address: req.query.address,
      });
    });
  });
});

app.get("/products", (req, res) => {
  /*
    "return" prevents res.send from running twice with one req call

    search term format:
    http://localhost:3000/products?search=games&rating=5
      this query is accessed with "req"
  */
  if (!req.query.search) {
    /*
      return res.send is required because only one res.send allowed
    */
    return res.send({
      error: "you must provide a search term: /products?search=<>&rating=<>",
    });
  }

  console.log("req.query: ", req.query, req.query.search, req.query.rating);
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "help",
    errorMessage: "HELP page not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "none",
    errorMessage: "GENERIC page not found",
  });
});

// to start an express server
app.listen(3000, () => {
  console.log("server is up on port 3000");
});
