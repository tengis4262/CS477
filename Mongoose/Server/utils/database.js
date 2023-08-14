const { MongoClient } = require('mongodb');
const { get } = require('../routes/productRouter');

const client = new MongoClient('mongodb://127.0.0.1:27017');


let db;

async function createDB(callback) {
    try {
        await client.connect();
        db = client.db('tengisShopping');
        callback();
    } catch (err) {
        console.error(err);
    }


}

function getDb() {
    if (db) {
        return db;
    } else {
        throw new Error('NO Database Found');
    }
}

exports.createDB = createDB;
exports.getDb = getDb;