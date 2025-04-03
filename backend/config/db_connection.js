const mongoose = require('mongoose')
// Below we create a variable to hold the connection string this is like the hose from the tanker to the big tank it tells mongoose which database to connect to and where it is
const connectionString = 'mongodb://localhost/commItems';

// Below we tell mongoose that it can accept things not in a schema so if our tanker was carrying a certain type of gas it could still add it to the tank even if the gas had some other kind of additive
mongoose.set('strictQuery', false);

// We invoke the connect method and give it the variable we defined
mongoose.connect(connectionString, {
// The options below are things used to direct the mongoose drivers esentially they help things run smoother 
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
// We use asyncronous functionality to console.log success or failure of the connection
.then(()=>{
    console.log('Mongoose connected to database')
})
.catch((err)=>{
    console.log(`Mongoose connection error: ${err}`)
})
mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
})

