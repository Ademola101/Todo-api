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
const {title,description, important} = req.body;
const timestamp = new Date
const newTodo =  new Todo ({
  title,
  description,
  important,
  timestamp
})
const savedTodo = await newTodo.save();
res.status(201).json(savedTodo)
}

const deleteTodo = async (req, res) => {
  await Todo.findByIdAndRemove(req.params._id);
  res.status(204).end()

}

module.exports = {
  allTodo,
  oneTodo,
  addTodo,
  deleteTodo
}