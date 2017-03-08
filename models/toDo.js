// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create a ToDo with the Schema class
var ToDoSchema = new Schema({
    // name of to-do item
    item: {
        type: String
    },
    // completed - boolean
    completed: {
        type: Boolean,
        default: false
    },
    // date the entry was created
    created: {
        type: Date,
        default: Date.now
    },
    // date the item is due - default is one day later
    due: {
        type: Date,
        default: new Date(+new Date() + 24 * 60 * 60 * 1000)
    }
});

// Make a ToDo model with the ToDoSchema
var ToDo = mongoose.model('items', ToDoSchema);

// Export the ToDo model
module.exports = ToDo;