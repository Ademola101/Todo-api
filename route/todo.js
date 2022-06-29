const express = require('express');

const router = express.Router();

const { allTodo, oneTodo, addTodo, deleteTodo} = require('../controller/todo');

router.get('/api/todos', allTodo);
router.get('/api/todos/:id', oneTodo);
router.post('/api/todos/', addTodo);
router.delete('/api/todos/:id', deleteTodo)

module.exports = router