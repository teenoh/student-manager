var Student = require("../models/Student");
var express = require("express");

var api = express.Router();

api.get("/", (req, res) => {
  Student.find({}, (err, data) => {
    if (err) {
      res.send("An error occured");
    } else {
      res.send(data);
    }
  });
});
api.get("/:id", (req, res) => {
  var id = req.params.id;
  Student.find({ _id: id }, (err, data) => {
    if (err) {
      res.send("An error occured,try again!");
      return;
    }
    res.send(data[0]);
  });
});
api.post("/", (req, res) => {
  var newObject = req.body;
  var model = new Student(newObject);
  model.save(err => {
    if (err) {
      res.send("Unable to create Student,try Again!");
      return;
    }
    res.send("Student created successfully");
  });
});

api.put("/:id", (req, res) => {
  var id = req.params.id;
  var newObject = req.body;

  Student.findByIdAndUpdate(id, { firstName: newObject.firstName }, err => {
    if (err) {
      res.send("Unable to update");
      return;
    }
    res.send("Updated");
  });
});
api.delete("/:id", (req, res) => {
  var id = req.params.id;
  Student.findByIdAndRemove(id, err => {
    if (err) {
      res.send("unable to delete");
      return;
    }
    res.send("Deleted successfully");
  });
});

module.exports = api;
