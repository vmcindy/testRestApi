'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GeoLocation = new Schema({
    lat: String,
    lng: String
},{ _id : false });

var Address = new Schema({
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: GeoLocation
},{ _id : false });

var Company = new Schema({
    name: String,
    catchPhrase: String,
    bs: String
},{ _id : false });

var User = new Schema({
    id: {
        type: Number,
        required: 'Invalid ID. Each user record needs a valid Id.'
    },
    name: String,
    username: String,
    email: String,
    address: Address,
    phone: String,
    website: String,
    company: Company
});

module.exports = mongoose.model('users', User);