'use strict';

var mongoose = require('mongoose');
var Photo = mongoose.model('photos');

exports.all_photos = function(req, res) {
    Photo.find({}, function(err, pht) {
        if(err)
            res.send(err);
        res.json(pht);
    });
};

exports.read_photo = function(req, res) {
    Photo.findOne({id: req.params.photoId}, function(err, pht) {
        if(err)
            res.send(err);
        res.json(pht);
    });
};