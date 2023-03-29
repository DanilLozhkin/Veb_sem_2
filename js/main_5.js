//const { error } = require('console');
const http = require('http')
//let data

const hostname = '127.0.0.1';
const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(req.method,req.url,"/",req.httpVersion );
    console.log("HOST:",req.socket.address().address, ":",req.socket.address().port);
    res.end(`HI`);
//reg.on('data', (chank)=>
// data+=chank;
//)
//reg.on('end',  ()=>{
//     comments.push(data);
//     res.setHeader('gfh',"eeefew/json");
//     res.end(JSON.stringify(comments));
// })
    
});

server.listen(PORT, hostname, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

//    127.0.0.1:3000
//   node js/main_4
