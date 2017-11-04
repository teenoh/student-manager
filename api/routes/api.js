var express = require('express');
var router = express.Router();
var StudentApi = require("../controllers/student.api");
router.use("/students",StudentApi );
module.exports = router;
