const mongoose  = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: String,
  description : String,
  important: Boolean,
  timestamp: Date
})


const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
  Todo,
}