const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const personSchema = new Schema({
   name: {
      type: String,
      required: true
   }
}, {
   strict: false
});



module.exports = mongoose.model('Person', personSchema)