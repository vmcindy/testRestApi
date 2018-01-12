'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Address = new Schema({
    street: String,
    suite: String,
    city: String,
    zipcode: String
});

var Company = new Schema({
    name: String,
    catchPhrase: String,
    bs: String
});

var users = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the user'
    },
    username: String,
    email: String,
    address: Address,
    phone: String,
    website: String,
    company: Company
});

module.exports = mongoose.model('users', users);