const express = require('express')
const logger = require( './modules/logger.js')
const config = require('config')

const srvConfig = config.get('server')

const app = express()

app.get('/', function(req,res) {
    logger.log('info','/: placeholder');
    res.send('Main Directory');
})

app.listen( srvConfig.port, function() {
    logger.info("Listening on port " + srvConfig.port);
})
