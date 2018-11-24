const axios = require('axios')
require('dotenv').config();

let apiKey = process.env.GOOGLE_API
let baseUrl = "https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=YOUR_API_KEY"

//get the summary in terms of distance and timeout
//generate the link that gives you the right direction
//need to pass in the res object from express
function getRouteTime(origin, destination, res){
  //removes spaces and replaces with + for api
  let splitOrigin = origin.split(' ').join('+')
  let splitDestination = destination.split(' ').join('+')
  let timeAndUrl = {}
  axios.get("https://maps.googleapis.com/maps/api/directions/json?origin=" + origin + "&destination=" + splitDestination + "&key=" + apiKey)
  .then(response => {
    timeAndUrl.time = response.data.routes[0].legs[0].duration.text
    timeAndUrl.url = "https://www.google.com/maps/dir/?api=1&origin=" + origin  + "&destination=" + splitDestination

    res.json(timeAndUrl)
  })
  .catch(err => {
    console.log(err)
  })
}

var exports = module.exports = {};

exports.getRouteTime = getRouteTime;
