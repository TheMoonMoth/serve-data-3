const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

var characters = [{
  id: 1,
  firstName: "Alice",
  lastName: "Zephyr",
  homeTown: "Seattle"
},{
  id: 2,
  firstName: "Bob",
  lastName: "Yellow",
  homeTown: "Vancouver",
},{
  id: 3,
  firstName: "Claire",
  lastName: "Xylitol",
  homeTown: "Toledo"
},{
  id: 4,
  firstName: "Daniel",
  lastName: "Winston",
  homeTown: "Akron"
},{
  id: 5,
  firstName: "Edina",
  lastName: "Veritas",
  homeTown: "Wichita"
}];

function charByID(char, id) {
  for (var i = 0; i < char.length; i++) {
    if (char[i].id == id) {
      return char[i];
    }
  }
}

app.get("/", function (req, res) {
  response.json(characters);
});

app.get("/:id", function (req, res) {
  var char = charById(characters, request.params.id);
  if (!charID) {
    response.status(404);
    response.json({error: {message: "No character found with that ID."}});
  }
});

app.listen(process.env.PORT || 3000);
