var express = require('express');
var app = express();
var path = require('path');

var serverInfo = ['high five', 'fava beans'];

app.use(express.static('public'));

app.get('/serverInfo', function(req, res) {
    res.send(serverInfo);
});

app.listen(3000, function(){
    console.log('listening on 3000');
});