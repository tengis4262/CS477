const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.get('/add', (req, res, next) => {
    fs.createReadStream(path.join(__dirname, '..', 'views', 'add-product.html'))
        .pipe(res);
});

router.post('/add', (req, res, next) => {
    res.send('INSIDE POST method');
});

module.exports = router;