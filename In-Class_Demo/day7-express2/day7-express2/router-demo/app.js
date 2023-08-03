const express = require('express');
const fs = require('fs');
const path = require('path');

const productRouter = require('./routes/product');
const userRouter = require('./routes/user');


const app = express();

//http://localhost:3000/mysomething/css/main.css



app.use('/mysomething',express.static(path.join(__dirname)));

app.use('/products',productRouter);
app.use('/users', userRouter);
app.use('/shoppingcart', (req, res, next) => {
    // throw new Error('API NOT Supported');
    console.log(iiiii);
});

app.use((req, res, next) => {
    res.status(404).send('404 Page Not Found!');
});

app.use(function(err, req, res, next){
    res.status(500).send('Server maintaince, try later');
});


app.listen(3000);