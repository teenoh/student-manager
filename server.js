const config = require("./config");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require("cors");
var apiRoutes = require('./api/routes/api');
var connection = require('./api/config/database');


const server = express();


server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use(express.static("node_modules"));
server.use(express.static("public"));

server.use("/api", apiRoutes);

server.set("view engine", "ejs");

server.get(["/", "/new", "/edit/:id"], (req, res) => {
  res.render("index");
});

server.listen(config.port, config.host, () => {
  console.info("Express listening on port", config.port);
});
