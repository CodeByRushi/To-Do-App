const { render } = require('ejs');
const todoList = require('../models/models.js'); //refer this ToDoList for operations
module.exports.home = function(req,res){

    todoList.find({},function(err,todo){
        if(err){
            console.log('error in fetching data');
            return
        }
        
        return res.render('home',{
            title:"Home",
            todoList:todo
           
        })
    })


    
}
module.exports.create_todo = function(req,res){

    console.log("***********clicked******");
    
    console.log(req.body.category);
      //database storage
      todoList.create({
        desc : req.body.desc,
        category : req.body.category,
        dueDate : req.body.dateValue
    },function(err, toDoItem){
        if(err){
            console.log('Error in creating contact::', err);
            return;
        }
        console.log("***ToDo Added***", toDoItem);
        return res.redirect("back");
    });
  
}

module.exports.delete_todo = function(req,res){
    // console.log(req.body.deletecheck.checked);
    let id = req.query.id;
    todoList.findByIdAndDelete(id, function(err){//this method identifies by ID and delete it.
        if(err)//failure
        {
            console.log("Error in deletion", err);
            return;
        }
        console.log(req.query.id);
        console.log("deleted");
        return res.redirect("back");//successfully deleted then redirect to same page
    });
    
    // res.redirect("back");
}

module.exports.updateForm = function(req,res){
    console.log(req.query.id);
    todoList.findById(req.query.id, function(err,todoLists){
        if(err){ console.log('hi man!! it an error'); return}
        return res.render('editPage',{
        title:'Edit Page',
        todolist:todoLists
        });
    });
}

module.exports.updateToDoList = function(req,res){
  
    todoList.updateOne({_id:req.query.id},{$set:{
        desc:req.body.desc,
        category:req.body.category,
        dueDate:req.body.dueDate
    }} ,function(err,todoData){
        if(err){
            console.log('erroe while updating'); 
            return;
        }
        // console.log("Details Updated", todoData);
        return res.redirect('/');
    });
    
}