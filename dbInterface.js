const {MongoClient} = require('mongodb');

let client;

const isClientHasConnection = (clientConnection) => {
  return Boolean(clientConnection?.topology?.isConnected())
};

const connect = async () => {
    if(!isClientHasConnection(client)){
      client = await MongoClient.connect(process.env.MONGO_URL);
      console.log('Connected to MongoDB', process.env.MONGO_URL);
    }
    const db = client.db('admin');
    return db;
};

const addOneRecord = async (collection, records) => {
  const db = await connect();
  return db.collection(collection).insertOne(records);
};

const getRecords = async (collection, query) => {
  const db = await connect();
  return db.collection(collection).find(query).toArray();
};


module.exports = {addOneRecord, getRecords};



