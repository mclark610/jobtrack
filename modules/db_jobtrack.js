const config  = require('config')
const logger  = require( './logger.js')
const MongoClient = require('mongodb').MongoClient;
const dbConfig   = config.get('database')

function initMongo() {
    return MongoClient.connect( dbConfig.url,{useNewUrlParser: true});
}

module.exports = {
    insert_jobtrack: function(data) {
        initMongo()
            .then(function(db) {
                logger.info("db file is open.. now closing")
                logger.info("data: " + JSON.stringify(data))
                db.close();
            })
            .catch(function(err) {
                logger.error("insert_jobtrack: " + err)
            })

        return("01");
    }
}
