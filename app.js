
// Output to user, on port numbr and stuff.
console.log('Listening on port 3000.');

// Include: Express Framework the clean way.
var express = require('express');
var app = express();

// Include: Socket.IO
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

// Listen.
server.listen(3000);

// Configure IO.
io.set('log level', 2); // Debug = 3

// Configure App.
app.configure(function(){

    // Fix for POST body.
    app.use(express.bodyParser());
    
});

// Default GET.
app.get('/', function (req, res) {
    res.send('Node.js is running.');
});

// POST.
app.post('/jira', function (req, res) {
    var post_body = req.body;
    io.sockets.emit('trigger', post_body);
    res.send('ok');
});

// Default.
app.all('*', debugRequest);

// Error handling.
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.send(500, 'Something broke :\\');
});

// IO magic.
io.sockets.on('connection', function (socket) {

    // Nothing for now.

});

// Debugger.
function debugRequest(a, b, c) {

    console.log(a);

    // Out.
    b.send('.');
}
