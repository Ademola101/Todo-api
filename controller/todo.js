const { Todo } = require('../model/todo');

const allTodo = async (req, res) => {
  const todos = await Todo.find({});
  res.json(todos)
}

const oneTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo ? res.json : res.status(404).end()
}

module.exports = {
  allTodo,
  oneTodo
}