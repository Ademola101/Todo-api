const { Todo } = require('../model/todo');

const allTodo = async (req, res) => {

  try {
    const todos = await Todo.find({});
  res.status(200).json(todos)
    
  } catch (error) {

    res.status(404).end()
    
  }
  
}

const oneTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo ? res.status(200).json(todo) : res.status(404).end()
}

const addTodo = async (req, res) => {
const {title,description, important, timestamp} = req.body;

const newTodo =  new Todo ({
  title,
  description,
  important,
  timestamp
}) 

try {
  const savedTodo = await newTodo.save();
res.status(201).json(savedTodo)

  
} catch (error) {
  res.status(422).end()
}
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
  res.status(400).end()
}}


module.exports = {
  allTodo,
  oneTodo,
  addTodo,
  deleteTodo,
  updateTodo
}