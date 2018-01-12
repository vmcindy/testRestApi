'use strict';

var mongoose = require('mongoose');
var Comment = mongoose.model('comments');

exports.all_comments = function(req, res) {
    Comment.find({}, function(err, pst) {
        if(err)
            res.send(err);
        res.json(pst);
    });
};

exports.create_comment = function(req, res) {
    var new_comment = new comment(req.body);
    new_comment.save(function(err, pst) {
        if(err)
            res.send(err);
        res.json(pst);
    });
};

exports.read_comment = function(req, res) {
    Comment.findOne({id: req.params.commentId}, function(err, pst) {
        if(err)
            res.send(err);
        res.json(pst);
    });
};

exports.update_comment = function(req, res) {
    Comment.findOneAndUpdate({id: req.params.commentId}, req.body, {new: true}, function(err, pst) {
        if(err)
            res.send(err);
        res.json(pst);
    });
};

exports.delete_comment = function(req, res) {
    Comment.remove({id: req.params.commentId}, function(err, pst) {
        if(err)
            res.send(err);
        res.json(pst);
    });
};