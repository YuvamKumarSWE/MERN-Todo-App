const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todoInfo:{
        type: String,
        required: [true, 'A todo must have some content.'],
        trim: true
    }
}

);

const todoList = mongoose.model('todo', todoSchema);

module.exports = todoList;