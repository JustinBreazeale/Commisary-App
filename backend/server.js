// This lesson will deal with CRUD operations and their implementation in the MERN stack.  CRUD is an accronym for Create Read Update and Delete.  These operations refer to interactions with your database.  In this lesson we are going to be using the mongodb database and mongoose which is an ODM(Object data modeling) library

// The first thing we need to do is run the npm init command to get our package.json file and the we will also install some middleware to help handle things

// Below is the setup for our server
// After we have the package.json file we have access to all the node modules. A module is a pre-written reusable code provided by node.js
// On of the modules provided is express.  Express is a framework provided by node.js and has built in functionality for things like routing middleware and serving static files.  Express also has very good error handling qualities.  Im going to begin an analogy here our begin by thinking our API is a car think of express as the engine the engine receives requests from the various controls move forward move back turn left turn right.
// So to begin we must put our engine in the car so we import the express module below.
// ---------------------------
import express from 'express'
// ---------------------------

//We need our ODM library so we have to run npm i mongoose in our console this will add mongoose to our dependencies
// Think of our mongo db as the big tank under the gas station it can be filled with any kind of gas for distribution mongoose is like a tanker truck you can fill your truck with a certain type of gas to be put in the big tank. 

// -----------------------------
import mongoose from 'mongoose'
// -----------------------------

// Now we have to import some middleware we can compare middleware to the different things an engine interacts with like pumps and transmissions

// We run the npm i body-parser to add it to our dependencies
// The body-parser is used to turn request bodies into recognizable things in our case JSON objects.  Request that come from a browser look like a random bunch of letters numbers and signs only the computer can read body-parser turns this randomness to something we can read.  It is essentially a translator
import bodyParser from 'body-parser'

// We dont need to run an npm install for routes because it is part of the express functionality.  We can think of routes as the transmission tells the power coming from the engine where to go.  So this is expresses way of telling where request it receives should go.
import routes from './routes/routes.js'

// We need to run npm i cors.  The cors module is middleware that checks where each request is going and makes sure it will be accepted 
import cors from 'cors'

// Below we will store the express method in a variable called app so anytime we use this variable it runs through express 
const app = express()

// Here we create the PORT variable this will tell the server where to listen for incoming requests
const PORT = 1219

// In a seperate file I have written all the mongoose code below we are giving access to that information
import './config/db_connection.js'

// Below we tell our translator what language we want translated
// The urlEncoded tells body-parser the requests will be url encoded which is the random bunch of stuff we talked about above the extended false means only single objects will be parsed nothing nested.
app.use(bodyParser.urlencoded({ extended:false }))
// Then we tell the translator what language we want it on.  In our case we want JSON objects
app.use(bodyParser.json())

// Here well tell our app to use the cors from above
app.use(cors())

// Here we invoke the routes function essentially we engage our transmission
routes(app)

// app.listen is the starter of our car it tells the motor to start running
// We pass the PORT variable which tells the server where to listen for requests
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})



