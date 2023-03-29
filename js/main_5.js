//const { error } = require('console');
const http = require('http')

const hostname = '127.0.0.1';
const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(req.method,req.url,"/",req.httpVersion );
    console.log("HOST:",req.socket.address().address, ":",req.socket.address().port);
    res.end(`HI`);
    
});

server.listen(PORT, hostname, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

//    127.0.0.1:3000
//   node js/main_4
