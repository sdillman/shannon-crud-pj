const hbs = require('express-handlebars');
const express = require('express');
const mongoose = require('mongoose');
const rolesSchema = require('./rolesSchema.js');
const Role = mongoose.model('role', rolesSchema);
const Opera = mongoose.model('opera', rolesSchema);
const Composer = mongoose.model('composer', rolesSchema);

// view engine setup
app.set('view engine', 'hbs');

app.engine( 'hbs', hbs( {
  extname: 'hbs',
  defaultView: 'default',
  layoutsDir: __dirname + '/views/pages/',
  partialsDir: __dirname + '/views/partials/',
  defaultLayout: 'main',
  extname: '.hbs'
}));

app.get('/', (req, res) => {
    res.render('home');
});

// Mongo Connection
const MongoClient = require('mongodb').MongoClient;
const connectionString = "mongodb+srv://dbUsrRoles:hAovgC1pdMzTCnlL@cluster0.abhfa.mongodb.net/performances?retryWrites=true&w=majority";
const client = new MongoClient(connectionString, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("performances").collection("roles");
  // perform actions on the collection object
  console.log(`COLLECTION ${collection}`);
  client.close();
});