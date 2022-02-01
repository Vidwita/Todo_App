const express = require('express');
const http = require('http');

const port=8000;



const app = express();



app.listen(port,function(err){

    if(err)
    {
        console.log(`Error in running server: ${err}`);
        return;
    }

    console.log(`Server is up and running on port : ${port}`);

});