const mongoose = require('mongoose');

let RecruiterSchema = new mongoose.Schema({
    name: {
        type: String,
        default: () => "",
    },
    email: String,
    company: String,
    url: String,
    phone: {
        type: String,
        default: () => "393-5555"
    },
    date_submitted: Date,
    date_created: Date,
    date_modified: Date,
    date_closed: Date,
});

module.exports = mongoose.model('Recruiter', RecruiterSchema);
