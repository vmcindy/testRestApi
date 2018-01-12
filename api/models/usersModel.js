'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GeoLocation = new Schema({
    lat: String,
    lng: String
});

var Address = new Schema({
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: GeoLocation
});

var Company = new Schema({
    name: String,
    catchPhrase: String,
    bs: String
});

var users = new Schema({
    id: Number,
    name: String,
    username: String,
    email: String,
    address: Address,
    phone: String,
    website: String,
    company: Company,
});

module.exports = mongoose.model('users', users);