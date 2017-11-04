import config from "./config";
//import apiRouter from './api';
import path from "path";
import express from "express";
import apiRouter from './api'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
var cors = require('cors');


const server = express();

var mongoDB = "mongodb://localhost/student-manager";

mongoose.connect(mongoDB, {
  useMongoClient: true
});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:false}));

server.use(express.static('node_modules'));
server.use(express.static("public"));

server.use('/api', apiRouter)



server.set("view engine", "ejs");

server.get(["/", "/new", "/edit/:id"], (req, res) => {
  res.render("index");
});



server.listen(config.port, config.host, () => {
  console.info("Express listening on port", config.port);
});
