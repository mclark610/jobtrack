const mongoose  = require('mongoose');
const logger    = require('./modules/logger');
const Job       = require('./data/job_model');
const Recruiter = require('./data/recruiter_model');
const {fetch_jobtrack} = require('./modules/db_jobtrack');

mongoose.connect('mongodb://localhost:27017/jobtrack',{useNewUrlParser: true})
var db = mongoose.connection;

db.on('error', console.error.bind(console,'connection error:'));

db.on('open',function(){
    console.log("MongoDB Open")
});
/*
Job.find({},function(err,jobs) {
       if (err) {
           console.log(err)
       } else {
           console.log("jobs: " + jobs )
       }
})

Recruiter.find({_id:"5b58ab26f0112d78c94a67a9"},function(err,recruiters) {
       if (err) {
           console.log(err)
       } else {
           console.log("recruiters: " + recruiters )
       }
})
*/

fetch_jobtrack(req,res);
