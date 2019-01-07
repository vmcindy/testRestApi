'use strict';

var mongoose = require('mongoose');
var Post = mongoose.model('posts');

exports.all_posts = function(req, res) {
    Post.find({}, function(err, pst) {
        if(err)
            res.send(err);
        res.json(pst);
    });
};

exports.create_post = function(req, res) {
    var new_post = new Post(req.body);
    new_post.save(function(err, pst) {
        if(err)
            res.send(err);
        res.json(pst);
    });
};

exports.read_post = function(req, res) {
    Post.findOne({id: req.params.postId}, function(err, pst) {
        if(err)
            res.send(err);
        res.json(pst);
    });
};

exports.update_post = function(req, res) {
    Post.findOneAndUpdate({id: req.params.postId}, req.body, {new: true}, function(err, pst) {
        if(err)
            res.send(err);
        res.json(pst);
    });
};

exports.delete_post = function(req, res) {
    Post.remove({id: req.params.postId}, function(err, pst) {
        if(err)
            res.send(err);
        res.json(pst);
    });
};