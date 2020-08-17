const mongoose = require('mongoose');

const rolesSchema = new mongoose.Schema({
  deleted: {
      type: Boolean,
      required: [false]
  },
  role: {
    type: Object,
    required: [true, 'Username is required'],
    languages: {
        type: Array,
        required: [true, 'Language performed is required']
    },
    name: {
        type: String,
        required: [true, 'Name of the role is required']
    }
  },
  opera: {
    type: String,
    required: [true, 'Opera name is required']
  },
  composer: {
    type: String,
    required: [true, 'The composer\'s name is required']
  }
});

module.exports = rolesSchema;