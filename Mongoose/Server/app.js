const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const productRouter = require('./routes/productRouter');
// const { createDB } = require('./utils/database');

//instatiation
const app = express();


//configuration



//middleware
app.use(cors());
app.use(express.json());
app.use('/products', productRouter);


//startup
const PORT = 3000;
mongoose.connect('mongodb://127.0.0.1:27017/khulanShopping')
    .then(() => {
        app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
    });