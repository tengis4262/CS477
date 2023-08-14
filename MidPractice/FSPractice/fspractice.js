const fs = require('fs');
const path = require('path');
const express =require('express');

const app = express();


// fs.createReadStream(path.join(__dirname,'hello.txt')).pipe(fs.createWriteStream(path.join(__dirname,'hi.txt')))


app.get('/',(req,res)=>{
    const text = fs.createReadStream('hello.txt');
    // let filename = path.join(__dirname,'hi.txt');
    // let data = fs.readFileSync(filename, 'utf8');
    // console.log(data)
    let data = ''
    
    
    text.on('data',(chunk) =>{
        data+= chunk;
    });
    
    text.on('end',()=>{
        console.log(data);
        res.status(200).send(data);
    })
})

app.listen(4000)




