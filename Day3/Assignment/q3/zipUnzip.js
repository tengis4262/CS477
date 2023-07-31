const fs = require('fs');
const zlib = require('zlib');
const path = require('path');


fs.createReadStream(path.join(__dirname, 'destination.txt.gz'))
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream(path.join(__dirname, 'abc.txt')))
