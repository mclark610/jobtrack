const config  = require('config');
const logger  = require( './logger.js');

const MongoClient = require('mongodb').MongoClient;
const ObjectID    = require('mongodb').ObjectID;

function initMongo() {
    return MongoClient.connect( dbConfig.url,{useNewUrlParser: true});
}

module.exports = {
    fetch_jobtrack: function(req,res) {
        initMongo()
            .then(function(client) {
                logger.info("data: " + JSON.stringify(req.body))

                let jt_db = client.db('jobtrack');

                jt_db.find()
                    .then(function() {

                    })

            })
            .catch(function(err) {
                logger.info("fetch_jobtrack: error: " + err)
            })
    },
    insert_jobtrack: function(req,res) {
        initMongo()
            .then(function(client) {
                logger.info("data: " + JSON.stringify(req.body))

                let jt_db = client.db('jobtrack')

                jt_db.collection('jobtrack').insertOne(req.body)
                     .then(function(results) {
                        logger.info("collection saved ok: " + results)
                        logger.info("_id: " + results._id)
                        logger.info("_id: " + results["ops"][0]["_id"])
                        client.close();
                     })
                     .catch(function(err) {
                         logger.error("insert_inner_jobtrack: " + err)
                     })
            })
            .catch(function(err) {
                logger.error("insert_jobtrack: " + err)
            })
    },
    update_jobtrack: function(req,res) {
        initMongo()
            .then(function(client) {
                logger.info("data: " + JSON.stringify(req.body))
                // match id
                let filter = {
                    _id: ObjectID(req.body["_id"])
                }
                let data = req.body;

                // Remove _id from data because we dont want to write over it!
                delete data._id;

                let jt_db = client.db('jobtrack')

                jt_db.collection('jobtrack').update(filter, data,{upsert: true})
                     .then(function(results) {
                        logger.info("collection updated ok: " + results)
                        client.close();
                     })
                     .catch(function(err) {
                         logger.error("update_inner_jobtrack: " + err)
                     })

            })
            .catch(function(err) {
                logger.error("update_jobtrack: " + err)
            })
    },
    delete_jobtrack: function(req,res) {
        initMongo()
            .then(function(client) {
                logger.info("data: " + JSON.stringify(req.body))
                // match id
                let filter = {
                    _id: ObjectID(req.body["_id"])
                }
                let data = req.body;

                // Remove _id from data because we dont want to write over it!
                delete data._id;

                let jt_db = client.db('jobtrack')

                jt_db.collection('jobtrack').deleteOne(filter)
                     .then(function(results) {
                        logger.info("collection deleted ok: " + results)
                        client.close();
                     })
                     .catch(function(err) {
                         logger.error("delete_inner_jobtrack: " + err)
                     })

            })
            .catch(function(err) {
                logger.error("delete_jobtrack: " + err)
            })
    },


}
