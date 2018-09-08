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
        Job.find({}, `
              _id
             company_name
             position
             description
             contact
             phone
             url
             email
             status
             recruiters.name

            `, function(err, jobs) {
            if (err) {
                console.log("err: " + err);
                res.status(400).json(err);
            } else {
                res.status(200).json(jobs);
                console.log("JOBS: " + jobs)
            }
        })
    },

    insert_jobtrack: function(req, res) {
        console.log("req: " + JSON.stringify(req.body));
        let job = new Job( req.body ); //Job.create(req.body, function(err, review) {
        job.save(function(err,result) {
            console.log("insert_jobtrack: err: " + err)
            console.log("insert_jobtrack result: " + result)
        })
    },

    update_jobtrack: function(req, res) {
        Job.findById(req.body._id, function(err, job) {
            if (err) {
                console.log("err: " + err);
                res.status(400).json(err);
            } else {
                job.set(req.body);
                job.save(function(err,updatedJob) {
                    res.status(200).json(updatedJob);
                })
            }
        })
    },
    delete_jobtrack: function(req, res) {
        Job.findByIdAndRemove(req.body._id, function(err) {
            if (err) {
                console.log("err: " + err);
                res.status(400).json(err);
            } else {
                res.status(200);
            }
        })
    }
}
