const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {

    let html = `
    <form action="signup" method="post">
           Firstname: <input name="firstname" /> <br/>
           Lastname: <input name="lastname"> <br/>
           <button>Submit</button>
    </form>
    `;
    res.send(html);
});

app.post('/signup', (req, res, next) => {
    if (req.body.firstname && req.body.lastname) {

        // fs.readFile('database.txt',(err, data) => {
        //    data += ', ' + req.body.firstname + '='+ req.body.lastname;
        //    fs.writeFile('database.txt', data, err => {
        //         res.send('save successfully!');
        //    });
        // });
        
        let data = fs.readFileSync('database.txt');
        data += ', ' + req.body.firstname + '='+ req.body.lastname;
        fs.writeFileSync('database.txt', data);
        res.send('save successfully!');

    } else {
        let html = `
            <form action="signup" method="post">
                Firstname: <input name="firstname" /> <br/>
                Lastname: <input name="lastname"> <br/>
                <button>Submit</button>
                <p>firstname and lastname is required</p>
            </form>
            `;
        res.send(html);
    }

});






app.listen(8080);
