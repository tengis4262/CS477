const express = require('express');
const fs = require('fs');
const path = require('path');


const app = express();

app.get('/', (req, res) => {
    fs.createReadStream(path.join(__dirname, 'views', 'index.html'))
        .pipe(res);
});

app.all('/add', express.urlencoded({extended: true}), (req, res, next) => {
    console.log(req.body);
    res.send('Save successfully');
});

app.get('/users/:uid/posts/:pid', (req, res) => {
    console.log(req.params);
    res.send('Hi....');
});









app.listen(3000);