var express = require('express')
var app = express()
var gMaps = require('./googleMaps/gmaps')

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, console.log("App listening on port 3000"))

app.get('/gmaps', function (req, res){
  gMaps.getRouteTime("100 WalterScott Crescent, Markham, CA", "Queen's University, Kingston, ON", res)
})
