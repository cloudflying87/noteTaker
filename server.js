// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

var notes =[]
;

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
  });

app.get("/api/notes", function(req, res) {
  var notes = req.params.note
  
});

app.post("/api/notes" , function(res,req){
  var newNote = req.body;
  console.log(newNote)
  notes.push(newNote)
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });