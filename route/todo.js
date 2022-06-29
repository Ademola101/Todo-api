const express = require('express');

const router = express.Router();

const { allTodo, oneTodo, addTodo, deleteTodo, updateTodo} = require('../controller/todo');

router.get('/api/todos', allTodo);
router.get('/api/todos/:id', oneTodo);
router.post('/api/todos/', addTodo);
router.delete('/api/todos/:id', deleteTodo)
router.put('/api/todos/:id', updateTodo)

module.exports = router