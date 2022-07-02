const { Todo } = require('../model/todo');

const allTodo = async (req, res) => {
  const todos = await Todo.find({});
  res.json(todos)
}

const oneTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo ? res.json(todo) : res.status(404).end()
}

const addTodo = async (req, res) => {
const {title,description, important, timestamp} = req.body;

const newTodo =  new Todo ({
  title,
  description,
  important,
  timestamp
})
const savedTodo = await newTodo.save();
res.status(201).json(savedTodo)
};

const deleteTodo = async (req, res) => {
  await Todo.findByIdAndRemove(req.params.id);
  res.status(204).end();
};

const updateTodo = async(req, res) => {
  const { title, description, important,timestamp } = req.body
  const newTodo = {
    title,
    description,
    important,
    timestamp,

  };

try{
const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, newTodo, {new:true});
res.json(updatedTodo)
}

catch(err){
  res.status(400)
}}


module.exports = {
  allTodo,
  oneTodo,
  addTodo,
  deleteTodo,
  updateTodo
}