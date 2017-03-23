// Websocket Chatroom

var all_sockets = null;

exports.set_sockets = function (sockets) {
    all_sockets = sockets;
};

exports.connect_chatter = function (config) {
    var username = 'guest-' + config.username;;
    var nickname = '';

    config.socket.emit('entrance', { message: 'Welcome to the chat room!' });
    all_sockets.emit('entrance', { message: username + ' is online.' });

    config.socket.on('disconnect', function () {
        if (nickname) {
            config.socket.emit('exit', { messsgae: '<em>' + nickname + '</em> has disconnected.' });

        } else {
            config.socket.emit('exit', { messsgae: '<em>' + username + '</em> has disconnected.' });
        }
    });

    config.socket.on('change_username', function (data) {


        if (data.new_username &&  data.new_username.toLowerCase() !== 'guest' ) {


            if (nickname) {
                all_sockets.emit('chat', { message: 'Nickname changed from <em>' + nickname + '</em> to <em>' + data.new_username + '</em>'});
            } else {
                all_sockets.emit('chat', { message:  username + ' has a new nickname of  <em>' + data.new_username + '</em>'});
            }

            nickname = data.new_username;

        }
    });

    config.socket.on('chat', function (data) {
        
        if (nickname) {
            all_sockets.emit('chat', { message: '<strong>' + nickname + ' says:</strong> ' + data.message });
        } else {
            all_sockets.emit('chat', {message: '<strong>' +  username + 'says:</strong>  ' + data.message });
        }



        
    });
};

exports.failure = function (socket) {
    socket.emit('error', { message: 'Please log into the chatroom.' });
};