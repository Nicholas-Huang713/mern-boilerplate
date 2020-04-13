const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const PostSchema = require('./post').schema;

const UserSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    date: {
        type: String,
        default: Date.now()
    }  
})

const User = mongoose.model('User', UserSchema);

module.exports = User;