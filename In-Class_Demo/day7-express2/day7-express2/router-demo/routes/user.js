const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.get('/add', (req, res, next) => {
    // fs.createReadStream(path.join(__dirname, '..', 'views', 'add-user.html'))
    //     .pipe(res);
    res.sendFile(path.join(__dirname, '..', 'views', 'add-user.html'));
});

router.post('add', (req, res, next) => {
    res.send('INSIDE Users POST method');
});

module.exports = router;