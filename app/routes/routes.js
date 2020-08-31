const express = require('express');
const router = express.Router();

const Roles = require('../models/rolesSchema');

// Roles.find() is not a function. Does "find()" come in via Express?? can't declare Express here - it's already in app.js

const MongoClient = require('mongodb').MongoClient;
const connectionString = "mongodb+srv://dbUsrRoles:hAovgC1pdMzTCnlL@cluster0.abhfa.mongodb.net/performances?retryWrites=true&w=majority";
const client = new MongoClient(connectionString, { useUnifiedTopology: true, useNewUrlParser: true });

// LIST ALL ROLES
// router.get('/', function(req, res, next) {
//     client.connect(err => {
//     const collection = client.db("performances").collection("roles");
//     // perform actions on the collection object
//     collection.find()
//         .then (doc => {res.json(doc)})
//         .catch (err => {res.json({err})})
//     res.send("Roles.find - routes index.js represent!");
//     res.render('home', {layout: 'default', template: 'home-template'});
//     console.log(`COLLECTION from routes.js ${collection}`);
//     client.close();
//     });
// });

router.get('/', function(req, res, next) {
  res.send("routes index.js represent!");
  res.render('home', {layout: 'default', template: 'home-template'});
});

// List all roles - The Original
router.get('/', function(req, res, next) {
  Roles.find()
        .then (doc => {res.json(doc)})
        .catch (err => {res.json({err})})
  res.send("Roles.find - routes index.js represent!");
  res.render('home', {layout: 'default', template: 'home-template'});
});

//  Create a role
router.post('/', function(req, res, next) {
    let {role, opera, composer} = req.body;
    let newRole = new Roles({role, opera, composer});
    newRole.save()
        .then(doc => {res.json(doc)})
        .catch(err => {res.json({err})})
    res.send("posted a new role - routes index.js represent!");
    res.render('home', {layout: 'default', template: 'home-template'});
  });

//  Update a role
router.put('/:id', (req, res) => {
    let _id = req.params.id;
    let {role, opera, composer} = req.body;

    Roles.findOneAndUpdate({_id}, {role, opera, composer}, {new: true})
        .then(doc => res.json(doc))
        .catch(err => res.json({err}))
    res.send("updated - routes index.js represent!");
    res.render('home', {layout: 'default', template: 'home-template'});
})

//  Delete a role
//  In the future, merely mark it as deleted - don't actually delete it
router.delete('/:id', (req, res) => {
    let _id = req.params.id;
    let {deleted} = true;
    
    Roles.findOneAndUpdate({_id}, {deleted}, {new: true})
        .then(doc => res.json(doc))
        .catch(err => res.json({err}))
    res.send("deleted - routes index.js represent!");
    res.render('home', {layout: 'default', template: 'home-template'});
})


module.exports = router;