const express = require('express');
const app= express();
const router = require('./main_6');

// let name=[];
app.use(express.static('public'));
app.use(express.json())

// app.use('/user',(req,res,next) => {
    
//     next()
// })

app.use('/', router)

const hostname = '127.0.0.1';
const PORT = 3000;

app.listen(PORT, hostname, () => {
    // console.log(req.method, req.url, "/", req.httpVersion);
    // console.log("HOST:", req.socket.address().address, ":", req.socket.address().port);
    console.log("OK server");
})