var express = require("express");
var app = express();
var path = require("path");

var port = process.env.PORT || 5000; // set our port
// ROUTES
// =============================================================================
var router = express.Router(); // get an instance of the express Router

//Serves all the request which includes /img /js /css /dist in the url from /img /js /css /dist folder
app.use("/img", express.static(__dirname + "/img"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/dist", express.static(__dirname + "/dist"));

// test route to make sure everything is working (accessed at GET http://localhost:9090/)
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/game.html"));
});
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /
app.use("/", router);

// START THE SERVER
// =============================================================================

app.listen(port);
console.log("Listening on port " + port);
