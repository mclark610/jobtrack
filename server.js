const express = require('express')
const logger  = require( './modules/logger')
const config  = require('config')
const cors        = require('cors')
const srvConfig   = config.get('server')
const bodyParser  = require('body-parser')
const {insert_jobtrack,
       update_jobtrack,
       delete_jobtrack
      } = require('./modules/db_jobtrack')

const app = express()

// Set public directory
app.use("/css", express.static(__dirname+'/public/css'))
app.use("/js", express.static(__dirname+'/public/js'))
app.use("/images", express.static(__dirname+'/public/images'))
app.use("/data", express.static(__dirname+'/public/data'))
app.use("/view", express.static(__dirname+'/public/view'))
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

app.get('/grid_data', function(req,res) {
    logger.log('info','grid_data');
    res.sendFile( __dirname+'/public/data/testdata.json')
})
app.get('/grid_data_test', function(req,res) {
    logger.log('info','grid_data');
    res.sendFile( __dirname+'/public/data/testdata_small.json')
})

app.get('/grid_page', function(req,res) {
    logger.log('info','grid_page');
    res.sendFile( __dirname+'/public/view/grid_page.html')
})

app.get('/temp', function(req,res) {
    logger.log('info','temp');
    res.sendFile( __dirname+'/public/view/temp.html')
})

app.get('/fetch_jobtrack', function(req,res) {
    logger.log('info','insert_jobtrack placeholder');
    res.status(out.res_sts).json(out);
})

app.post('/insert_jobtrack', function(req,res) {
    logger.log('info','insert_jobtrack placeholder');

    insert_jobtrack(req,res);

    logger.log('info', 'req body: ' + JSON.stringify(req.body))
})

app.post('/update_jobtrack', function(req,res) {
    logger.log('info','update_jobtrack placeholder');
    update_jobtrack(req,res);

    logger.log('info', 'req body: ' + JSON.stringify(req.body))
})

app.post('/delete_jobtrack', function(req,res) {
    logger.log('info','delete_jobtrack placeholder');
    update_jobtrack(req,res);
})

app.listen( srvConfig.port, function() {
    logger.info("Listening on port " + srvConfig.port);
})
