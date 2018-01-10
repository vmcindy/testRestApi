'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoListTasks = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('todoList', todoListTasks);