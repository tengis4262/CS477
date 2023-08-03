const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();


app.get('/', (req, res, next) => {
    console.log('1....');
    next();
}, (req, res, next) => {
    console.log('2....');
    next('dfdfd');
}, (req, res, next) => {
    console.log('3....');
    next();
}, (req, res, next) => {
    console.log('4....');
    next();
});

app.use('/', (req, res, next) => {
    console.log('5....');
    res.send('Hi');
});

app.use((err, req, res, next)=>{
    res.send(500, 'Try later');
});


app.listen(3000);