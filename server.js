const express = require('express')
const logger  = require( './modules/logger')
const config  = require('config')
const cors        = require('cors')
const srvConfig   = config.get('server')
const bodyParser  = require('body-parser')
const {initMongo} = require('./modules/db_jobtrack')

const app = express()

let out = {
    res_sts: 200,
    results: true,
    notes  : 'placeholder'
}

app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function(req,res) {
    res.sendFile( __dirname+'/public/view/index.html')
})

app.get('/fetch_jobtrack', function(req,res) {
    logger.log('info','insert_jobtrack placeholder');
    res.status(out.res_sts).json(out);
})

app.post('/insert_jobtrack', function(req,res) {
    logger.log('info','insert_jobtrack placeholder');
//    insert_jobtrack(req.data);
    res.status(out.res_sts).json(out);
})

app.post('/update_jobtrack', function(req,res) {
    logger.log('info','update_jobtrack placeholder');
    res.status(out.res_sts).json(out);
})

app.post('/delete_jobtrack', function(req,res) {
    logger.log('info','delete_jobtrack placeholder');
    res.status(out.res_sts).json(out);
})

app.listen( srvConfig.port, function() {
    logger.info("Listening on port " + srvConfig.port);
})
