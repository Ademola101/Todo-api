const { Todo } = require('../model/todo');

const allTodo = async (req, res) => {
  const todos = await Todo.find({});
  res.json(todos)
}

const oneTodo = async (req, res) => {
  const todo = await Todo.findById(req.params._id);
  todo ? res.json(todo) : res.status(404).end()
}

const addTodo = async (req, res) => {

const newTodo = new Todo(req.body);
const savedTodo = await newTodo.save();
res.status(201).json(savedTodo)
}


module.exports = {
  allTodo,
  oneTodo,
  addTodo,
}