//This file tells mongoose to work on DB on given schema.
const mongoose = require('mongoose');

//creating schema structure
const toDO_Schema = new mongoose.Schema({
    desc :{
        type :String,
        required : true
    },
    category :{
        type :String,
        required : true
    },
    dueDate :{
        type :String,
        required : true
    }
});

//giving name to the collection as "Contact" as well as providing its schema.
const Contact = mongoose.model('todoList', toDO_Schema);

module.exports = Contact;