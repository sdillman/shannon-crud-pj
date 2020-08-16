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
