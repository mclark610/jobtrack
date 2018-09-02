const mongoose  = require('mongoose');
const logger    = require('./modules/logger');

const {fetch_jobtrack,insert_jobtrack} = require('./modules/db_jobtrack');

mongoose.connect('mongodb://localhost:27017/jobtrack',{useNewUrlParser: true})
var db = mongoose.connection;

let req,res;

 fetch_jobtrack(req,res);
//insert_jobtrack(req,res);



//console.log("date: " + new Date().toISOString().split('T')[0])
