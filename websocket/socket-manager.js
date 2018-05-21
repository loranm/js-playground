const users = [];

const socketManager = (socket) => {
    registerUser(socket.id, `User${users.length +1 }`)
    const user = users.find((user) => user.id === socket.id)
    sayHello(user, socket)
}

const registerUser = (id, name) => users.push({id: id, name: name});

const sayHello = (user,socket) => socket.emit('hello world', user);

module.exports = (io) => {
    io.on('connection', socketManager)
}    
