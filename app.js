//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");
const mongoose = require("mongoose");

const app = express();

const port = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/fruitdb"); //to connect to the database

var items = ["buy food"];
let workItems = [];

app.set("view engine", "ejs"); //must be applied and ejs files mus be in views folder

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public")); // a directory called public must be created and js images and csss files must be included in it in order to send these files to the client.

app.get("/", function(req, res) {

  let day = date.getDate();

  res.render("list", {listTitle: day,newListItem: items}); //if you dont provide all the variables on the ejs file here, the app will crash

});

app.post("/", function(req, res){
  let item = req.body.newItem;

  if (req.body.list === "Work List"){
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item)
    res.redirect("/");  //res.redirect directs the client to the specified page
  };

  console.log(req.body);





});

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newListItem: workItems});

});

app.get("/about", function(req, res){
  res.render("about")
});







app.listen(port, function() {
  console.log("Server has started on port 3000");
});
