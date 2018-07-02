const express = require('express')
const logger  = require( './modules/logger')
const config  = require('config')
const cors        = require('cors')
const srvConfig   = config.get('server')

const {initMongo} = require('./modules/db_jobtrack')

const app = express()

let out = {
    res_sts: 200,
    results: true,
    notes  : 'placeholder'
}

initMongo()

app.use(cors({ origin: '*' }));

app.get('/fetch_jobtrack', function(req,res) {
    logger.log('info','insert_jobtrack placeholder');
    res.status(out.res_sts).json(out);
})

app.get('/insert_jobtrack', function(req,res) {
    logger.log('info','insert_jobtrack placeholder');
    res.status(out.res_sts).json(out);
})

app.get('/update_jobtrack', function(req,res) {
    logger.log('info','update_jobtrack placeholder');
    res.status(out.res_sts).json(out);
})

app.get('/delete_jobtrack', function(req,res) {
    logger.log('info','delete_jobtrack placeholder');
    res.status(out.res_sts).json(out);
})

app.listen( srvConfig.port, function() {
    logger.info("Listening on port " + srvConfig.port);
})
