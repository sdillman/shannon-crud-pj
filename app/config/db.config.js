// Mongo Connection  (import from another file at some point) ******************************
const MongoClient = require('mongodb').MongoClient;
const connectionString = "mongodb+srv://dbUsrRoles:hAovgC1pdMzTCnlL@cluster0.abhfa.mongodb.net/performances?retryWrites=true&w=majority";
const client = new MongoClient(connectionString, { useUnifiedTopology: true, useNewUrlParser: true });

// require model here??

client.connect(err => {
  const collection = client.db("performances").collection("roles");
  // perform actions on the collection object
  console.log(`COLLECTION from db.config.js ${collection}`);
  client.close();
});

module.exports = {
  DATABASE: process.env.MONGO_URL || connectionString,
  APP_PORT: process.env.APP_PORT || 8000
}