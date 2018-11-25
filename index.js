var express = require('express')
var app = express()
var gMaps = require('./googleMaps/gmaps')
var httpServer = require("http").createServer(app);  
var five = require("johnny-five");  
var io=require('socket.io')(httpServer);
 
var port = 3000; 

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, console.log("App listening on port 3000"))

app.get('/gmaps', function (req, res){
  gMaps.getRouteTime("100 WalterScott Crescent, Markham, CA", "Queen's University, Kingston, ON", res)
})

 
app.use(express.static(__dirname + '/public'));
 
app.get('/', function(req, res) {  
        res.sendFile(__dirname + '/public/index.html');
});
 
httpServer.listen(port);  
console.log('Server available at http://localhost:' + port);  
var led;
 
// this will make the arduino board connection
 
var board = new five.Board();  
board.on("ready", function() { 
     
    console.log('Arduino connected');
    //led = new five.Led(2);
    
var temperature = new five.Thermometer({
    controller: "LM35",
    pin: "A0"
  });

//Socket connection handler
io.on('connection', function (socket) {  
   
    temperature.on("data", function() {
        var currTemp = {"celsius":this.celsius,"fahrenheit":  this.fahrenheit}
         socket.emit('data', currTemp);
        //console.log(this.celsius + "°C", this.fahrenheit + "°F");
  });
       
    
        console.log(socket.id);
 
       /* socket.on('led:on', function (data) {
           led.on();
           console.log('LED ON RECEIVED');
        });
 
        socket.on('led:off', function (data) {
            led.off();
            console.log('LED OFF RECEIVED');
 
        });*/
    });
    

  
});
 
 



 
console.log('Waiting for connection');
