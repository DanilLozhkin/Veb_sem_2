const { getDb } = require('../configs/BD'); 

const { MongoClient } = require('mongodb'); 

let db=getDb;

module.exports = {
    findToArray: (collectionName, query) => {
        return dbConnection.collection(collectionName).find(query).toArray();
    },
    findOne: (collectionName, query) => {
        return dbConnection.collection(collectionName).findOne(query);
    },
    insertOne: (collectionName, document) => {
        return dbConnection.collection(collectionName).insertOne(document);
    }
}