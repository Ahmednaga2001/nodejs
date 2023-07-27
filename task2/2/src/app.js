const forecast = require("./forecast");
const geocode = require("./geocode");

geocode((error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    forecast((error, data1) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data1);


        const express = require("express");
        const app = express();
        const port = process.env.PORT || 3000;
        app.set("view engine", "hbs");

        const path = require("path");
        const viewsDir = path.join(__dirname, "../temp1/views");
        app.set("views", viewsDir);

        const hbs = require("hbs");
        const partialspath = path.join(__dirname, "../temp1/partials");
        hbs.registerPartials(partialspath);

        const publicDirectory = path.join(__dirname, "../public");
        app.use(express.static(publicDirectory));

        app.get("/", (req, res) => {
          res.render("index", {
            title: "Home Page",
            desc: "Welcom Ahmed Naga",
          });
        });

        app.get("/check", (req, res) => {
          res.render("check", {
            title: "Check Page",
            country: "egypt",
            temp: data1.temp,
            text: data1.text,
            longtitude: data.longtitude,
            latitude : data.latitude
          });
        });
 
        app.listen(port, () => {
          console.log(`listen on port ${port}`);
        });
      }
    });
  }
});
