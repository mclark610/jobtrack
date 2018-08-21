const mongoose = require('mongoose');

let JobSchema = new mongoose.Schema({
	company_name: String,
    position: String,
    description: String,
    contact: String,
    phone: String,
    url: String,
    email: String,
    status: String,
    resume: String,
    cover: String,
    keywords: String,
    date_submitted: Date,
    date_created: Date,
    date_modified: Date,
    date_closed: Date,
    status: String,
    recruiters: {
        recruiter_id: String
    }
})

module.exports = mongoose.model('Job', JobSchema);
