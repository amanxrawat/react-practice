// const express = require('express'); 
// now modern syntax

import express from 'express';

const app = express();


app.get('/',(req,res)=>{
    res.send("Server is ready")
});

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'A joke',
            content:"this is A joke"
        },
        {
            id:2,
            title:'B joke',
            content:"this is b joke"
        },
        {
            id:3,
            title:'C joke',
            content:"this is c joke"
        }
    ]

    res.send(jokes)

})

const port = process.env.PORT ||3000;

app.listen(port);