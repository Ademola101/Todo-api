const mongoose  = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: String,
  description : String,
  important: Boolean
})

todoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const model = mongoose.model('Todo', todoSchema);

module.exports = {
  model,
}