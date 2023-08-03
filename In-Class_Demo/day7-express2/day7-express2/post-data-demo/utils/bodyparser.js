module.exports = () => function (req, res, next) {
    let data = '';
    req.on('data', (chunk) => {
        data += chunk;
    });
    req.on('end', ()=>{
        const parsedParams = new URLSearchParams(data);
        req.body = parsedParams;
        next();
    }); 
}