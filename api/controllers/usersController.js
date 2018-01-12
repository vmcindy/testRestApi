'use strict';

var mongoose = require('mongoose');
var User = mongoose.model('users');

exports.all_users = function(req, res) {
    User.find({}, function(err, usr) {
        if(err)
            res.send(err);
        res.json(usr);
    });
};

exports.create_user = function(req, res) {
    var new_user = new User(req.body);
    new_user.save(function(err, usr) {
        if(err)
            res.send(err);
        res.json(usr);
    });
};

exports.read_user = function(req, res) {
    User.findById(req.params.userId, function(err, usr) {
        if(err)
            res.send(err);
        res.json(usr);
    });
};

exports.update_user = function(req, res) {
    User.findByIdAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, usr) {
        if(err)
            res.send(err);
        res.json(usr);
    });
};

exports.delete_user = function(req, res) {
    User.remove({_id: req.params.userId}, function(err, usr) {
        if(err)
            res.send(err);
        res.json(usr);
    });
};