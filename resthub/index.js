let express = require("express");

let app = express();

var port = process.env.PORT || 8080;

app.get("/", (req, res) => res.send("Hello World with Express and Nodemon"));

app.listen(port, function() {
  console.log("Running RestHub on port " + port);
});

let apiRoutes = require("./api-routes");

app.use("/api", apiRoutes);
