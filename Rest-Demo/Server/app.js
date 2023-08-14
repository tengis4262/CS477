const express = require('express');

const productRouter = require('./routes/productRouter')



const app = express();




app.use('/products',productRouter);


const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server listening on http://localhost:${PORT}`);
})