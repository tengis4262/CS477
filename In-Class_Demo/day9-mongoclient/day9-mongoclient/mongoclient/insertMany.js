// const MongoClient = require('mongodb').MongoClient;
const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://127.0.0.1:27017');

async function main(){
    await client.connect();
    console.log('connect to database succesfully..');
    const db = client.db('onlineshopping');
    const collection = db.collection('products');
    const result = await collection.insertMany([
        {title: 'React.js', price: 299.99, description: 'Great 2'},
        {title: 'Angular.js', price: 399.99, description: 'Great 3'},
        {title: 'Cloud Computing', price: 499.99, description: 'Great 4'}
    ]);
    return result;
}


main()
    .then((data) => {
        console.log(data);
    })
    .catch(console.error)
    .finally(() =>  client.close());
