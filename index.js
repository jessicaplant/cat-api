const express = require('express');
const app = express();
const port = 8000;
const {getCats, analyseCats} = require('./dependencies/node-package-test/index');
const preparedResponse = require('./dependencies/responses-ahoy/index');
const DbHole = require('./dependencies/db-hole/index')

app.get('/', function (req, res) {
    getCats()
        .then((kitties) => {
            const connection = new DbHole()
            console.log('got kitties...');
            analyseCats(kitties).then(() => {
                console.log('data about kitties');
                const result = new preparedResponse(kitties, req.query.page, req.query.count).result
                res.send(result)
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