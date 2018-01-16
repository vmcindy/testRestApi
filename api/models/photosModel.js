'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Photo = new Schema({
    id: {
        type: Number,
        required: 'Invalid ID. Each comment record needs a valid Id.'
    },
    albumId: Number,
    title: String,
    url: String,
    thumbnailUrl: String
});

module.exports = mongoose.model('photos', Photo);