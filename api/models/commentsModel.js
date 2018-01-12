'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = new Schema({
    id: {
        type: Number,
        required: 'Invalid ID. Each comment record needs a valid Id.'
    },
    postId:  {
        type: Number,
        required: 'Invalid ID. Each comment record needs a valid Post Id.'
    },
    name: String,
    email: String,
    body: String
});

module.exports = mongoose.model('comments', Comment);