const express = require('express');
const app = express();
const port = 8000;
const {getCats, analyseCats} = require('./dependencies/node-package-test/index');

app.get('/', function (req, res) {
    getCats()
        .then((kitties) => {
            console.log('got kitties...');
            analyseCats(kitties).then(() => {
                console.log('data about kitties');
                res.send(kitties)
            })
        }).catch((err) => {
            console.log('ERROR')
            console.error(err)
        });
});

app.get('/test', function (req, res) {
    res.send('Regina Blitz!');
});

app.listen(port, function () {
    console.log('Running');
});