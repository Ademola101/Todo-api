const express = require('express');

const router = express.Router();

const { allTodo, oneTodo} = require('../controller/todo')

router.get('/api/todos', allTodo)
router.get('/api/todos/:id', oneTodo)

module.exports = router