
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tablearray = []
var waitListArray = []
class Table{
    constructor(name, phone, email, id){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.id = id;
    }
}

class WaitList{
    constructor(name, phone, email, id){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.id = id;
    }
}

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

  
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

app.post("/reserve", function(req, res) {
    if(tablearray.length >= 5){
        const createTable = new WaitList (req.body.name, req.body.phone, req.body.email, req.body.id);
        waitListArray.push(createTable);
        console.log(tablearray);
        console.log(waitListArray);
        console.log("att 5");
    }else{
        const createTable = new Table (req.body.name, req.body.phone, req.body.email, req.body.id);
        tablearray.push(createTable);
        console.log(tablearray);
        console.log(waitListArray);
        console.log(tablearray.length);
    }
});

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
    for(var i = 0; i < tablearray.length; i++){
        var htag1El = $("<h3> "+ value.name +"</h3>");
        $("divInit").append(htag1El);
    }
    // $.each(tablearray, function( index, value ) {
    // });
});

