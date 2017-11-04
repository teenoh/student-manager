const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create student schema and model
const StudentSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    sex: {
        type: String,
        required: [true, 'Sex field is required']
    },
    location: {
        type: String,
        required: [true, 'Location field is required']
    },
    dob: {
        type: String,
        required: [true, 'Date of Birth field is required']
    },
});

const Student = mongoose.model('student', StudentSchema);
module.exports = Student;
