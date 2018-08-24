const config = require('config');
const logger = require('./logger.js');

const dbConfig = config.get('database');

const mongoose = require('mongoose');

// Models
const Recruiter = require('../data/recruiter_model').schema;
const Job = require('../data/job_model');

mongoose.connect('mongodb://localhost:27017/jobtrack', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.on('open', function() {});

module.exports = {
    fetch_jobtrack: function(req, res) {
        Job.find({
            position: "Conductor"
        }, `_id
                     recruiter
                     company_name
                     position
                     description
                     contact
                     phone
                     url
                     email
                     status
            `, function(err, jobs) {
                    if (err) {
                        console.log("err: " + err);
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(jobs);
                        //                console.log("JOBS: " + jobs)
            }
        })
    },

    insert_jobtrack: function(req, res) {

        let job = Job.create({
            company_name: "Trans Union",
            position: "Conductor",
            description: "big job that requires 10 people to do",
            contact: "Ssjfdasmfdesh Singh",
            phone: "570-949-4944",
            url: "http://cheaplabor.net",
            recruiters: [{
                name: "Fred",
                phone: "666-555-4444"
            }],

        }, function(err, review) {
            if (err) {
                console.log("insert_jobtrack: couldnt save properly: " + err)
            } else {
                console.log("review: " + review);
            }
        })
    },
    update_jobtrack: function(req, res) {},
    delete_jobtrack: function(req, res) {}
}
