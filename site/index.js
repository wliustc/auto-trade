// Generated by CoffeeScript 1.6.3
(function() {
  var CONFIG, app, io, server;

  app = require('./server');

  CONFIG = require('./config');

  server = require('http').Server(app);

  io = require('socket.io').listen(server);

  io.on('connection', function(socket) {
    
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
    ;
    return console.log("xxxx".error);
  });

  io.set('destroy upgrade', false);

  server.listen(CONFIG.port);

  console.log(("Server Running On Port \"" + CONFIG.port + "\" ...").info);

}).call(this);
