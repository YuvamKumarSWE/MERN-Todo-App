const express = require('express');
const todoController = require('../controllers/todoController')
const router = express.Router();

router.route('/')
    .get(todoController.getAllTodos)
    .post(todoControllser.addTodo)
    .delete(todoController.deleteTodoTable);

module.exports = router;