var io = require('socket.io')
    , connect = require('connect')
    , chatter = require('./chatter');

var app = connect().use(connect.static('public')).listen(3000);
var chat_room = io.listen(app);


chatter.set_sockets(chat_room.sockets);

chat_room.sockets.on('connection', function (socket) {
   /* socket.emit('entrance', { message: 'Welcome to the chat room!' });
    socket.on('disconnect', function () {
        chat_room.sockets.emit('exit', { message: 'A chatter has disconnected.' });

    });
    socket.on('chat', function (data) {
        chat_room.sockets.emit('chat', { message: '# ' + data.message });
    });

    chat_room.sockets.emit('entrance', { message: 'A new chatter is online!' });

    */

    chatter.connect_chatter({
        socket: socket,
        username: socket.id

    });
});

