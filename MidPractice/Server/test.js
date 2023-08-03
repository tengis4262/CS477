const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const dataBase = 'database1.txt';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/signup', (req, res) => {
    const {fname, lname} = req.body
    if (!fname || !lname) {
        res.status(400).send('Firstname and lastname are required');
    } else {
        const userData = `${fname}=${lname},`;
        fs.appendFile(dataBase, userData, (err) => {
            if (err) {
                res.status(500).send('Failed to save user information');
            } else {
                res.status(200).send('Saved successfully');
            }
        })
    }

})




const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on localhost:${port}`);
})