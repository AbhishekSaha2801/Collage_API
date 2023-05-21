//For Creating Schema we have to Import mongoose
const mongoose = require('mongoose');

//Now we can create Schema using mongoose
//Schema : logical Representation
const collageSchema = new mongoose.Schema({
    collage_name : {
        type : String,
        required : true,
    },
    course_name : {
        type : String,
        required : true,
    },
    course_fee : {
        type : String,
        required : true,
    },
    course_duration : {
        type : String,
        required : true,
    },
    accommodation : {
        type : String,
        enum : ['AC','Non-AC'],
    },
    accommodation_fee : {
        type : String,
    },
});

module.exports = mongoose.model('Collage',collageSchema);