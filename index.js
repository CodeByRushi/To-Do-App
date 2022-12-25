const express = require('express');
const app = express();
const port = 8000;

app.listen(port, function(err){
    if(err){
        console.log(`There is an error in running the server`);
        return;
    }
    console.log(`Server is running fine on port ${port}`);
});