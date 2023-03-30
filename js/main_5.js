//const { error } = require('console');
const http = require('http');
const { parse } = require('querystring');

let date='';

const hostname = '127.0.0.1';
const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(req.method,req.url,"/",req.httpVersion );
    console.log("HOST:",req.socket.address().address, ":",req.socket.address().port);
    if(req.method=='GET'){
        res.end(`HI`);
        if(req.url=="/stats"){
            
        }
    }else if(req.method=='POST'){
        if(req.url=="/comments"){
            let body='';
            req.on('data', chunk => {
                body +=chunk;
            });
            req.on('end',  ()=>{
                let params = parse(body);
                let json = JSON.stringify(params);
                date +=json + ' ';
                res.end(date);
            });
        }else{
            res.end(`400 Bad Request`);
        }
    }
});

server.listen(PORT, hostname, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

//    127.0.0.1:3000
//   node js/main_4
