const express = require('express');
const fs = require('fs');
const path = require('path');


const app = express();
const dataBase = 'database.txt';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let filename = path.join(__dirname,'database.txt');

let data = fs.readFileSync(filename, 'utf8');
let datas = data.split(',');
console.log(data.split(','));

// get - fetch data
// post - insert data
// patch - update data
// delete - delete data


app.get('/', (req, res) => {
    // const username = req.params.username;
    res.sendFile((__dirname + '/index.html'));
});

app.post('/login', (req, res) => {
    const {username, password} = req.body
    if (!username || !password) {
        res.status(400).send('Firstname and lastname are required');
        // res.json({message: "Saved Successfully"})
    } else {
        const userData = `${username}=${password}`;
        if (datas.indexOf(userData) != -1) {
            res.status(200).send(`welcome ${username}`);

        } else {
            res.status(400).send('password incorrect');

        }
    }

})




const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on localhost:${port}`);
})