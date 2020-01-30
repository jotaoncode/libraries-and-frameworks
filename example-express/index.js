const express = require('express');

const app = express();

app.use(express.json());

const middlewareLogQuery = (req, res, next) => {
    console.log(req.query);
    console.log(req.body);
    next();
};

app.get('/', middlewareLogQuery, (req, res) => {
    res.send('Hello world!');
});

app.post('/', middlewareLogQuery, (req, res) => {
    res.send('Hello post');
});

app.listen(3000, () => {
    console.log('Listening in port 3000');
});
