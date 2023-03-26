//const { error } = require('console');
const http = require('http')

const hostname = '127.0.0.1';
const PORT = 3000;

const server = http.createServer((req, res) => {
    //console.log(req.headers['x-forwarded-for'] || req.socket.remoteAddress || null);
    console.log(req.);
});

server.listen(PORT, hostname, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

//    127.0.0.1:3000
//   node js/main_5