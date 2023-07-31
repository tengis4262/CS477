const http = require('http');

const port = 3000
http.createServer((req,res)=>{
    res.end('Hello WORLD!!!')
}).listen(3000,()=>{
    console.log(`Server running on http://localhost:${port}`)
})
