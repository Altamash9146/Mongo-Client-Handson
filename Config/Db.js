const { MongoClient } = require('mongodb');

const localurl = "mongodb://127.0.0.1:27017";

const mongoServer = new MongoClient(localurl);

async function connectToDatabase() {
    try {
        await mongoServer.connect();
        console.log('Local server connected');
    } catch (error) {
        console.error(error);
    }
}

connectToDatabase();

const database = mongoServer.db("Mongodb_Test1");
module.exports = { database };
