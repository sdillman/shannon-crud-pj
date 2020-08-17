// Mongo Connection  (import from another file at some point) ******************************
const MongoClient = require('mongodb').MongoClient;
const connectionString = "mongodb+srv://dbUsrRoles:hAovgC1pdMzTCnlL@cluster0.abhfa.mongodb.net/performances?retryWrites=true&w=majority";
const client = new MongoClient(connectionString, { useNewUrlParser: true });

client.connect(err => {
  const collection = client.db("performances").collection("roles");
  // perform actions on the collection object
  console.log(`COLLECTION ${collection}`);
  client.close();
});

module.exports = {
    url: "mongodb://localhost:27017/roles_db"
  };