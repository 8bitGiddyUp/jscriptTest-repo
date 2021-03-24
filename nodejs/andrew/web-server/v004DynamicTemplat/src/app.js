const path = require("path");
const express = require("express");

console.log("__dirname: ", __dirname);
console.log("path.join: ", path.join(__dirname, "../public"));

const app = express();

// helps access public/index.html
const publicDirectoryPath = path.join(__dirname, "../public");

// lets node to know which template engine to use "hbs" handlebars;
// moreover, it uses "view" folder and recognizes ".hbs" files; the "public"
// folder is no longer the main webpage folder;
// "public/index.html" is removed since "view/index.hbs" replaces it;
// handlebars is use to inject dynamic values to HTML code outputs;
app.set("view engine", "hbs");
app.use(express.static(publicDirectoryPath));

// lets webpage to start at "views/index.hbs";
// make sure to delete or rename "public/index.html" so that the web-server
// doesn't find the static "public/index.html"
app.get("", (req, res) => {
  res.render("index", {
    title: "weatherrrrr app",
    name: "andy mead",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "about hbs",
    name: "john page",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "help hbs",
    message: "this is your help page",
    name: "john page",
  });
});

app.get("/weather", (req, res) => {
  res.send({ forecast: "sunny and mild", location: "boston" });
});

// to start an express server
app.listen(3000, () => {
  console.log("server is up on port 3000");
});
