const socket = io()
const userInfo = document.getElementById('userinfo')
const selectFromId = (id) => document.getElementById(id)


const el = {
    createNewConnexion: selectFromId('js-create-peer-connexion')
}

const onHelloWorld = (user) => {
    userInfo.textContent = `Hello ${user.name}`
}

socket.on('hello world', onHelloWorld)

console.log(location.hash)
var p = new SimplePeer({ initiator: location.hash === '#1', trickle: false })

p.on('error', function (err) { console.log('error', err) })

p.on('signal', function (data) {
    console.log('SIGNAL', JSON.stringify(data))
    document.querySelector('#outgoing').textContent = JSON.stringify(data)
})

document.querySelector('form').addEventListener('submit', function (ev) {
    ev.preventDefault()
    p.signal(JSON.parse(document.querySelector('#incoming').value))
})

p.on('connect', function () {
    console.log('CONNECT')
    p.send('whatever' + Math.random())
})

p.on('data', function (data) {
    console.log('data: ' + data)
})
