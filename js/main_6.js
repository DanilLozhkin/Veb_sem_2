const express = require("express");
const router = express.Router();
const { parse } = require('querystring');

let date = '', date_2 = "<table>";
let count = 0;
let params, json;

router.use(express.static('public'));

router.route('/').get((req,res) =>{
    res.end("Hi")
}).post((req,res) =>{
    res.end(`400 Bad Request`)
})

router.get('/stats', (req, res) => {
    
    count += 1;
    date_2 += `<tr><th>user</th><th>${count}</th></tr>`
    res.end(date_2);
});

router.post('/comments', (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk;
    });
    req.on('end', () => {
        params = parse(body);

        json = JSON.stringify(params);
        date += json + ' ';
        res.end(date);
    });
});

module.exports = router;