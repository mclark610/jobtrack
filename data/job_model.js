const mongoose = require('mongoose');
const Recruiter = require( './recruiter_model.js').schema;

let JobSchema = new mongoose.Schema({
	company_name: String,
    position: String,
    description: String,
    company_contact: {
		type: String,
	},
    phone: String,
    url: String,
    email: String,
    status: String,
    resume: String,
	rate: String,
    cover: String,
    keywords: String,
	recruiters: [Recruiter],
    date_submitted: Date,
    status: {
		type: String,
	    default: () => "open", // <-- make the default an empty object so you don't get a mess
    },
	history: [{
		date_entered: Date,
		entry: String
	}],
	date_created: {
		type: Date,
		default: () => Date.now()
	},
	date_modified: Date,
	date_closed: Date
})

module.exports = mongoose.model('Job', JobSchema);
