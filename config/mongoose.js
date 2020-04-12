//Require library
const mongoose = require('mongoose');


//connect to the db 
mongoose.connect('mongodb://localhost/todo_list_db');

//aquire connection
const db = mongoose.connection;


//print result connected or not
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { console.log('DataBase Connected')});