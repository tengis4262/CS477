const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const userFile = 'userfile.txt';
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

app.post('/signup',(req,res)=>{
    const userData = `${req.body.firstname} + ${req.body.lastname},`
    fs.appendFile(userFile,userData,(err)=>{
        if(err){
            res.status(500).send("Not successfull")
        }else{
            res.status(200).send("Saved Successfully")
        }
    });

})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on localhost:${PORT}`);
})