// require library
const mongoose = require('mongoose');

// create schema
const todoSchema = new mongoose.Schema({
    description : {
        type:String,
        required:true
    },
    date : {
        type: String,
        require:true,
    },
    category:{
        type:String
    }

})


const Todo = mongoose.model('Todo',todoSchema);


//export file
module.exports = Todo;