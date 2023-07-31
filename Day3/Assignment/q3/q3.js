const fs = require('fs');
const zlib = require('zlib');


function zipFile (input,output){
    fs.createReadStream(input).pipe(zlib.createGzip()).pipe(fs.createWriteStream(output + '.gz'));
} 


function unzipFile(input){
    fs.createReadStream(input).pipe(zlib.createGunzip()).pipe(fs.createWriteStream(input + 'Unzipped.txt'));
}

const inputZip = 'content.txt'; 
const inputUnzip = 'output.gz'
//To zip file
// zipFile(inputFile, 'output');
//To Unzip File
unzipFile('output.gz');
