const express = require('express');
const app = express();
const port = 8000;
const router = require('./routes/index')
const db = require('./config/mongoose');
const ToDoList = require('./models/models'); //refer this ToDoList for operations
//use express router
app.use('/', router);

//enables static files accessible to the project
app.use(express.static("assets"));

//setup the template engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log(`There is an error in running the server`);
        return;
    }
    console.log(`Server is running fine on port ${port}`);
});