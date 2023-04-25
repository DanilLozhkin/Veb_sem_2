const { MongoClient } = require('mongodb');

const URL = 'mongodb://localhost:27017/moviebox';

let dbConnection;

module.exports = {
    connectToDB: (cd) => {
        MongoClient
            .connect(URL)
            .then((client) => {
                dbConnection = client.db();
                return cd();
            })
            .catch()
    },
    getDb: () => dbConnection,
}