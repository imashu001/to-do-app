// require library
const express = require('express');
const path = require('path');
// assign listining port
const port = 1000;

const db = require('./config/mongoose');
const Todo = require('./models/todo');
const app = express();
// set view engines
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));


// Assigning function to the page
app.get('/',function(req,res){
    Todo.find({},function(err,todos){
        if(err){console.log('error in fething contact from db');return}
        return res.render('home',{
            title : "ToDo | home",
            todo_list:todos
        })  
    });
})

app.post('/create-task',function(req,res){
    Todo.create({
        description:req.body.description,
        category : req.body.category,
        date: req.body.date
    },function(err,newTodo){
        if(err){console.log('error in creating task'); return;}
        console.log('*******',newTodo);
        return res.redirect('/');
    })
    
});
app.get('/delete-task',function(req,res){
    let id = req.query.id;
    Todo.findByIdAndDelete(id,function(err){
        if(err){
            console.log('err in deleting task from database');
            return;
        }
        return res.redirect('/');
    });
    
})


// adding function to the port
app.listen(port,function(err){
    if(err){
        console.log('Error :', err);
    }
    console.log('Server is running on port :', port);
})