const todoModel = require('../models/todoModel');

exports.getAllTodos = async (req , res ) => {
    todoModel.find({})
    .then((todoList) => res.json(todoList))
    .catch((err) => res.json(err))
  
}

exports.addTodo = async (req , res) => {
    todoModel.create({
        todoInfo: req.body.task,
    })
        .then((todo) => res.json(todo))
        .catch((err) => res.json(err));
}

exports.deleteTodoTable = async (req, res) => {
    todoModel.deleteMany({})
        .then(() => res.json({ message: "All todos deleted successfully" }))
        .catch((err) => res.status(500).json({ error: err.message }));
}