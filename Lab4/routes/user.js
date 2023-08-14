const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();


router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','user.html'));
});

router.post('/add',(req,res,next)=>{
    res.send("User added successfully !!!");
});

module.exports = router;