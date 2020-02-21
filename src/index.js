const express   = require('express'),
       ejs      = require('ejs-mate'),
       path     = require('path'),
       app      = express(),
       http     = require('http'),
       socketIO = require('socket.io');
    

//setting
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'))
app.engine('ejs', ejs);
app.set('view engine','ejs');


//router
app.use(require('./router/index'))


//http server
const server = http.createServer(app);

//socket.io
const io = socketIO(server)
require('./socket')(io);


//static file
app.use(express.static(path.join(__dirname,'public')))

//server
server.listen(app.get('port'),()=>{
    console.log('server on por 3000')
});
