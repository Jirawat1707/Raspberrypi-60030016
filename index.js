var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send({ping:'hello this is server and I am alive!'});
});

app.get('/id', function(req, res) {
    res.send({ping:'hello this is server and I am got '+req.params.id});
});

app.listen(3006);
console.log('Listening on port 3006');