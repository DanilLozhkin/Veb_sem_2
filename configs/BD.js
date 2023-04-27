const { MongoClient } = require('mongodb');

let dbConnection;


module.exports = {
    connectToDB: (cb) => {
        MongoClient.connect(`mongodb://127.0.0.1:27017/VEB_2`)
            .then((client) => {
                console.log('Connect to BD');
                dbConnection = client.db();
                return cb();
            })
            .catch((err) => {
                console.log('error BD');
                return cb(err);
            })
    },
    getDb: () => dbConnection,
    // findToArray: (ds) => {
    //     return dbConnection.collection("VEB_2").find().toArray();
    // },
    // findToArray: (collectionName, query) => {
    //     return dbConnection.collection(collectionName).find(query).toArray();
    // },
    // findOne: (collectionName, query) => {
    //     return dbConnection.collection(collectionName).findOne(query);
    // },
    // insertOne: (collectionName, document) => {
    //     return dbConnection.collection(collectionName).insertOne(document);
    // }
}