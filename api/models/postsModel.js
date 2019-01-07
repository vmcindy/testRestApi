'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Post = new Schema({
    id: {
        type: Number,
        required: 'Invalid ID. Each post record needs a valid Id.'
    },
    userId:  {
        type: Number,
        required: 'Invalid ID. Each post record needs a valid User Id.'
    },
    title: String,
    body: String
});

module.exports = mongoose.model('posts', Post);