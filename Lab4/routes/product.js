const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.get('/' ,(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','products.html'))
});

router.post('/add',(req,res,next)=>{
    res.send("Product added successfully !!!")
});

module.exports =  router;