const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyparser = require('./utils/bodyparser');

const app = express();


app.use('/add', express.urlencoded({extended: true}), (req, res, next) => {
    console.log(req.body);
    res.send('Save successfully');
});

app.use('/edit', (req, res, next) => {

})

app.use('/', (req, res, next) => {
    fs.createReadStream(path.join(__dirname, 'views', 'add-product.html')).pipe(res);
});


app.listen(3000);