const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

fs.createReadStream('content.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('outContent.gz'));

