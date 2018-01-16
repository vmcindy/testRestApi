'use strict';

var mongoose = require('mongoose');
var Comment = mongoose.model('comments');

exports.all_comments = function(req, res) {
    Comment.find({}, function(err, cmnt) {
        if(err)
            res.send(err);
        res.json(cmnt);
    });
};

exports.create_comment = function(req, res) {
    var new_comment = new Comment(req.body);
    new_comment.save(function(err, cmnt) {
        if(err)
            res.send(err);
        res.json(cmnt);
    });
};

exports.read_comment = function(req, res) {
    Comment.findOne({id: req.params.commentId}, function(err, cmnt) {
        if(err)
            res.send(err);
        res.json(cmnt);
    });
};

exports.update_comment = function(req, res) {
    Comment.findOneAndUpdate({id: req.params.commentId}, req.body, {new: true}, function(err, cmnt) {
        if(err)
            res.send(err);
        res.json(cmnt);
    });
};

exports.delete_comment = function(req, res) {
    Comment.remove({id: req.params.commentId}, function(err, cmnt) {
        if(err)
            res.send(err);
        res.json(cmnt);
    });
};

exports.read_post_comments = function(req, res) {
    Comment.find({postId: req.params.postId}, function(err, cmnt) {
        if(err)
            res.send(err);
        res.json(cmnt);
    });
};