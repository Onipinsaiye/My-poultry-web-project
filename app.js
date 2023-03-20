const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})
app.post("/", function(req, res){
    var famerName = req.body.farmer;
    var address = req.body.address;
    var phoneNumber = req.body.phoneNumber;
    var foName = req.body.foName
    res.write("<p><h3><em>Name of poultry farmer surveyed: " + famerName + "</em><h3></p>");
    res.write("<p><h3><em>Address of poultry farmer surgeyed: " + address + "</em><h3></p>");
    res.write("<p><h3><em>Phone number of poultry farmer surveyed: " + phoneNumber + "</em><h3></p>");
    res.write("<h3><em>Name of field officer: " + foName + "</em><h3>");
    res.send();

})

app.listen(port, function(){
    console.log("Serer is working on port 3000....");
})