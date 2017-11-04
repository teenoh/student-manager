// const express = require("express");
// const Student = require("./models/Student");

// const router = express.Router();

// //get the list of all the students from the db
// router.get("/students", (req, res, next) => {
//   Student.find({}).then(students => {
//     res.send(students);
//   });
// });

// // add a new student record to db
// router.post("/students", (req, res, next) => {
//   Student.create(req.body)
//     .then(student => {
//       res.send(student);
//     })
//     .catch(next);
// });

// // update a particular student in the db
// router.put("/students/:id", (req, res, next) => {
//   Student.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
//     Student.findOne({ _id: req.params.id }).then(() => {
//       res.send(student);
//     });
//   });
// });

// // Delete a student from the db
// router.delete("/students/:id", (req, res, next) => {
//   Student.findByIdAndRemove({ _id: req.params.id }).then(student => {
//     res.send(student);
//   });
// });

// module.exports = router;
