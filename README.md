# Firewatch

## Inspiration

2018 has been historically noted as the worst year for destruction caused by wildfires, breaking numerous records in the process so far. On November 9, 2018, at least 76 civilians were killed by the Camp Fire, while three firefighters were injured, the fire also destroyed more than 10,321 structures, becoming the deadliest and most destructive fire in California history.

We wanted to tackle this issue as it is relevant to our world today, and will continue to grow as an issue. Regardless of whether people believe in the change in global warming as the cause for these wildfires, they still happen. Even though it's a larger struggle to prevent the way wildfires occur, lives can be saved when real-time, relevant information is sent to civilians in the area.
What it does

Using a temperature sensor powered by an Arduino 101, we determined a way to send real-time changes in the temperature to a node server. The front-end is a dashboard that displays several key pieces of information such as the change in temperature, the location, paths to safety, indication of when to evacuate as well as a twitter panel to extract social media analysis of current wildfires.

## How we built it

We built the project using the Intel Curie Board - Arduino 101 with a temperature sensor programmed with different frameworks to receive real-time data. The web app was built with react-native with node.js for the backend. The dashboard also includes the Twitter API as well. The text messaging feature is implemented using Twilio's API.
Challenges I ran into

One of the biggest challenges was sending the real-time data captured by the frameworks to our node.js backend servers for our web app. There were several methods to do this, but determining the appropriate one was a challenge.

## Accomplishments that we're proud of

Getting real-time data on a web app that is accurate to the temperature of the room and reacts to changes perfectly.

## What we learned

How relevant natural disasters can be tackled through the use of information.
 
## What's next for WILDFIRE

Implementation for various methods to notify civilians who have a lack of communication in rural areas. The idea of robots that sense temperature and are autonomously able to gather data about the fire such as the perimeter, affected area, etc.
