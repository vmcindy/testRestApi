'use strict';

var mongoose = require('mongoose'),
    todoListItem = mongoose.model('todoList');

exports.list_all_tasks = function(req, res) {
    todoListItem.find({}, function(err, task) {
        if(err)
            res.send(err);
        res.json(task);
    });
};

exports.create_task = function(req, res) {
    var new_task = new todoListItem(req.body);
    new_task.save(function(err, task) {
        if(err)
            res.send(err);
        res.json(task);
    });
};

exports.read_task = function(req, res) {
    todoListItem.findById(req.params.taskId, function(err, task) {
        if(err)
            res.send(err);
        res.json(task);
    });
};

exports.update_task = function(req, res) {
    todoListItem.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
        if(err)
            res.send(err);
        res.json(task);
    });
};

exports.delete_task = function(req, res) {
    todoListItem.remove({_id: req.params.taskId}, function(err, task) {
        if(err)
            res.send(err);
        res.json({message: 'Task successfully deleted'});
    });
};