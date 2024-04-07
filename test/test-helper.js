const {MongoMemoryServer} = require('mongodb-memory-server');

before(async () => {
  const mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    console.log(mongoUri);
    process.env.MONGO_URL = mongoUri;
});
