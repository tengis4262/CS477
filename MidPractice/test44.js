

// const Person = require('./test4');


// const person = new Person;

// person.name = "tengis";

// person.age = 28

// console.log(person.getInfo())

// const name = require('./test4');

// console.log(global.name)

const express = require('express');
const app = express();


app.get('/users', (req, res, next) => {
    console.log(1);
    next();
});
app.post('/users', (req, res, next) => {
    console.log(2);
    next();
});
app.all((req, res, next) => {
    console.log(3);
    res.status(200).send('Try later');
});

app.listen(3000, ()=>{
    console.log("Server Listening on http://localhost:3000/users")
})
