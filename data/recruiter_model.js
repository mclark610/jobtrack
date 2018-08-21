const mongoose = require('mongoose');

let RecruiterSchema = new mongoose.Schema({
    name: String,
    email: String,
    company: String,
    url: String,
    phone: String,
    date_submitted: Date,
    date_created: Date,
    date_modified: Date,
    date_closed: Date,
    jobs: {
        job_id: String
    }
});

module.exports = mongoose.model('Recruiter', RecruiterSchema);
