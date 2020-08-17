const hbs = require('express-handlebars');
const express = require('express');
const mongoose = require('mongoose');
const rolesSchema = require('./app/models/rolesSchema.js');
// const Role = mongoose.model('role', rolesSchema);
// const Opera = mongoose.model('opera', rolesSchema);
// const Composer = mongoose.model('composer', rolesSchema);
const route = require('./app/routes/index.js');
const cors = require("cors");


let app = express();
app.use('/', route);




// view engine setup
app.set('view engine', 'hbs');

app.engine( 'hbs', hbs( {
  defaultView: 'default',
  layoutsDir: __dirname + '/views/pages/',
  partialsDir: __dirname + '/views/partials/',
  defaultLayout: 'main',
  extname: '.hbs'
}));


// Mongo Connection  (import from another file at some point) ******************************
// const MongoClient = require('mongodb').MongoClient;
// const connectionString = "mongodb+srv://dbUsrRoles:hAovgC1pdMzTCnlL@cluster0.abhfa.mongodb.net/performances?retryWrites=true&w=majority";
// const client = new MongoClient(connectionString, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("performances").collection("roles");
//   // perform actions on the collection object
//   console.log(`COLLECTION ${collection}`);
//   client.close();
// });


// SERVER
// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route just to see if it's running on 8080, but no longer needed
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to the application test" });
//   res.render('home');
// });

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
}
);




