// In this file we will build the schemas for our CRUD operations using mongoose

// First we must gain access to the node module for mongoose there are different syntaxes for this the one below is my preffered but the commented out syntax works in exactly the same way.  Both access the specified module from your package manager.

// ------------------------------------------
import mongoose from 'mongoose'
// ------------------------------------------

// ------------------------------------------


// After we have accessed mongoose we must build a schema this can be thought of as blueprint or receipt for the information(data) you want to place in your database. 

// First declare a variable to reference the type of schema you want to use here we will use a mongoose schema
// ------------------------------------------
const Schema = mongoose.Schema
// ------------------------------------------

// The next item will be a variable that stores the "model" for our data this will be your actual schema or receipt

// Technically Schema is a function we know this because of the paretheses they always are an indicator of a function or method strictly speaking schema is a javaScript method.  This method creates instances of the mongoose schema

// We aad the export here so this can be accessed in other files
export const listItemSchema = new Schema({
// Inside this method we will build an object we know objects are made of key value pairs so our data will be defined this way

// Each piece of data will have a key and then a blueprint for the values it will accept directly below our first object will be a description of the item to be put on the list
// The key is going to be itemDescription 
    itemDescription: {
// Inside our curly braces we define the data here we declare the data type
        type: String,
// For this data we will declare this value to be required information 
        required: true
    },
// We will repeat this same receipt for each object in our schema
    numberRequested: {
        type: Number,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})
// We can now export our listItemSchema to other files for handling we did this above on line 24 however there is the option of exporting the model containing the schema from here it would store your schema in a variable for export
// ----------------------------------------------------------------
// const listItem = mongoose.model('listItem', listItemSchema)
// module.export = listitem 
// ----------------------------------------------------------------
// Its important to note models are made of schemas