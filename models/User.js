const mongoose = require('mongoose');
const Schema = mongoose.Schema

var UserSchema = new Schema({
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    name: {type:String, required:true},
    surname: {type:String, required:true}
})

module.exports = mongoose.model('Users', UserSchema);