const config  = require('config');
const logger  = require( './logger.js');

const dbConfig   = config.get('database');

const mongoose = require('mongoose');
const Job = require('../data/job_model');
const Recruiter = require('../data/recruiter_model');

mongoose.connect('mongodb://localhost:27017/jobtrack',{ useNewUrlParser: true } );

const db = mongoose.connection;


db.on('error', console.error.bind(console,'connection error:'));

db.on('open',function(){});

module.exports = {
    fetch_jobtrack: function(req,res) {
        Job.find({},function(err,jobs) {
               if (err) {
                   console.log(err)
               } else {
                   console.log("jobs: " + jobs )
                   res.status(200).json(jobs);
               }
        })
    },

    insert_jobtrack: function(req,res) {
    },
    update_jobtrack: function(req,res) {
    },
    delete_jobtrack: function(req,res) {
    },


}
