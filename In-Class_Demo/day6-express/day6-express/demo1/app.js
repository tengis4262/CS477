const express = require('express');
const fs = require('fs');

// 1. instantiation
const app = express();


//2. configuration
app.set('port', process.env.PORT || 3000);
// app.enable('case sensitive routing');
app.set('case sensitive routing', true);

//3. middleware

app.use((req, res, next) => {
    console.log('inside no path!!!!!!--------');
    next();
});

app.use('/signup', (req, res, next) => {
    res.end('Received Signup post request');
});

app.use('/', function(req, res, next) {
    fs.createReadStream('signup.html').pipe(res);
});



// 7. bootup
app.listen(app.get('port'), () => console.log(`listening on ${process.env.PORT}`));