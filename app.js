//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");
const mongoose = require("mongoose");

const app = express();

const port = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/todolistDB"); //to connect to the database


const itemSchema = {
  name: String
}

const Item = mongoose.model("Item", itemSchema);

const item1 = new Item({
  name: "Welcome To your todolist !"
});

const item2 = new Item({
  name: "hit the + button to add new item"
});

const defaultItems = [item1,item2];

// Item.insertMany(defaultItems, function(err){
//   if (err){
//     console.log(err)
//   } else{
//     console.log("succesfully added the items to DB")
//   }
// })




app.set("view engine", "ejs"); //must be applied and ejs files mus be in views folder

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public")); // a directory called public must be created and js images and csss files must be included in it in order to send these files to the client.

app.get("/", function(req, res) {

  Item.find({},function(err, foundItems){
    if(foundItems.length === 0){
          Item.insertMany(defaultItems, function(err){
            if (err){
              console.log(err)
            } else{
              console.log("succesfully added the default items to DB")
            }
          })
    }else{
      res.render("list", {listTitle: day,newListItem: foundItems}); //if you dont provide all the variables on the ejs file here, the app will crash
    }

  });

  let day = date.getDate();

  

});



app.post("/", function(req, res){

  

  if (req.body.list === "Work List"){
    workItems.push(item);
    res.redirect("/work");
  } else {
    new Item ({name: req.body.newItem}).save() //to add new document to the collection
    res.redirect("/");  //res.redirect directs the client to the specified page
  };

  console.log(req.body);






});


app.post("/delete", async function(req,res){
  const deletion = await Item.deleteOne({ _id: req.body.checkbox });
  res.redirect("/")

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
