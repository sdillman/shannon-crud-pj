const hbs = require('express-handlebars');
const express = require('express');
const mongoose = require('mongoose');
const rolesSchema = require('./app/models/rolesSchema.js');
// const Role = mongoose.model('role', rolesSchema);
// const Opera = mongoose.model('opera', rolesSchema);
// const Composer = mongoose.model('composer', rolesSchema);
const route = require('./app/routes/routes.js');
const cors = require("cors");


const app = express();

app.use('/', route);


// view engine setup for Handlebars
app.set('view engine', 'hbs');

// config for handlebars
app.engine( 'hbs', hbs( {
  defaultView: 'default',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/',
  defaultLayout: 'main',
  extname: '.hbs'
}));





// SERVER
// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));
// gotta use cors - cross-origin request sharing because we're making requests to servers not the web server domain

// app.use - things I have to do to every request. cors()
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//from https://medium.com/@waelyasmina/a-guide-into-using-handlebars-with-your-express-js-application-22b944443b65
app.use(express.static('public'));

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

// app.get
// get is an async function
// get("/route", req, res, next)
// get gets a route "/" "route", and req, res, next go the the callback function
// at minimum, req and res, functions provided by Express. next is also provided by Express, and basically means "continue"
// req is the get request FROM the browser, an object with all kinds of things hanging off of it
// res is the response TO the browser. res.json is a json response, for example
// next, if present, is an instruction set(?), telling get to wait for whatever it needs to wait for, and then 
// .net allows app.get to complete its processing and hand off to wherever it goes next
// 


