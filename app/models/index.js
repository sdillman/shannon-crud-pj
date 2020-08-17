// index files in models, routs etc - not where we have app logic. Import other files in, then export them,
// creating a nice interface. Gather up all the files in the folder, and export in this one place so that other parts of the
// app only need to import this one file, and not a slew of everything else in this directory. A common design pattern.
//
// const mongoose = require('mongoose'); is in many files and needs to be wherever it's needed due to scoping. In the final
// build process, the dupes will be removed automagically

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.roles = require("./role.model.js") (mongoose);

module.exports = db;



const role = require("./role.model.js");
// or maybe const roles = mongoose.model('roles');

// *** NOTES ***
// module.exports = {
//     url: "mongodb://localhost:27017/roles_db"
//   };

// const router = express.Router();
// const roles = mongoose.model('roles');





// mongoose.connect('stuffs',{more stuffs}){
//     if (!error) {
//         console.log("Connected!");
//     else {
//         console.log("error connecting");
//     }
//     }
// };
