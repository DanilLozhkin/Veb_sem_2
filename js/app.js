
const express = require('express');
<<<<<<< HEAD
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();
const router = require('./main_6');

//app.disable('x-powered-by');
app.use(helmet());
=======
const app = express();
const router = require('./main_6');

>>>>>>> 1fda1ecdb3779cb932491c57e513646793f2d6ac

const Key = (req, res, next) => {
    const apiKey = req.query.apiKey; 
    if (!apiKey || apiKey !== 'myApiKey') { 
        return res.status(401).json({ message: '400 ошибка аворизации' });}

    next(); 
};

app.use(express.static('public'));
app.use(express.json());

app.use((req, res, next) => {
<<<<<<< HEAD
    //console.log(req.method, req.url, "/", req.httpVersion);
    console.log("HOST:", req.socket.address().address, ":", req.socket.address().port);
    next();
});
app.use(morgan('dev'));

app.use('/', router);


=======
    console.log(req.method, req.url, "/", req.httpVersion);
    console.log("HOST:", req.socket.address().address, ":", req.socket.address().port);
    next();
});

app.use('/', router);

// Используем middleware функцию для авторизации на маршруте /api/users
>>>>>>> 1fda1ecdb3779cb932491c57e513646793f2d6ac
app.get('/api/users', Key, function (req, res) {
    const user = req.query.id;
    res.send({
        'user': user,
    });
});

const hostname = '127.0.0.1';
const PORT = 3000;

app.listen(PORT, hostname, () => {
    console.log("OK server");
});
