var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/student-manager');
module.exports = connection;