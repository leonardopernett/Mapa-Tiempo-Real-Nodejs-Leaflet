module.exports = io =>{

    io.on('connection', socket =>{
        console.log('connection new user');

        socket.on('userCoord', (coords)=>{
            socket.broadcast.emit('newUserCoords',coords);
        })
    })
}