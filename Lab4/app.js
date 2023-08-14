const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const userRouter = require('./routes/user');
const proRouter = require('./routes/product');




// app.use('')
app.use('/users',userRouter);
app.use('/products', proRouter);









const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server listening on http://localhost:${PORT}`)
})