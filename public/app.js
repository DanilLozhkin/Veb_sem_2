const express = require("express");

const app = express();

let date = '', date_2 = "<table>";
let count = 0;
const hostname = '127.0.0.1';
const PORT = 3000;

app.use(express.static('public'))

app.route('/').get((req,res) =>{
    res.end("Hi")
}).post((req,res) =>{
    res.end(`400 Bad Request`)
})


app.get('/', (req, res) => {
    console.log(req.method, req.url, "/", req.httpVersion);
    console.log("HOST:", req.socket.address().address, ":", req.socket.address().port);
    res.end("Hi");
});

app.get('/stats', (req, res) => {
    console.log(req.method, req.url, "/", req.httpVersion);
    console.log("HOST:", req.socket.address().address, ":", req.socket.address().port);
    count += 1;
    date_2 += `<tr><th>user</th><th>${count}</th></tr>`
    res.end(date_2);
});

app.post('/comments', (req, res) => {
    console.log(req.method, req.url, "/", req.httpVersion);
    console.log("HOST:", req.socket.address().address, ":", req.socket.address().port);
    let body = '';
    req.on('data', chunk => {
        body += chunk;
    });
    req.on('end', () => {
        let params = parse(body);
        let json = JSON.stringify(params);
        date += json + ' ';
        res.end(date);
    });
});



app.listen(PORT, hostname, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});