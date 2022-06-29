const express = require('express');

const router = express.Router();

const { allTodo, oneTodo, addTodo} = require('../controller/todo')

router.get('/api/todos', allTodo)
router.get('/api/todos/:id', oneTodo)
router.post('/api/todos/', addTodo)

module.exports = router