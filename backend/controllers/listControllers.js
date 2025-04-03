// These are the gears of our tranmission

// The controller is where we find the actual methods for performing CRUD operations for this app

// We will need our schemas for the CRUD operations below we import them. Again there are different syntaxes for importation just as there is in any of our files.  We will also need to gain access to mongoose so we will import it as well.
// -----------------------------------
import mongoose from 'mongoose'
// -----------------------------------
// const mongoose = require('mongoose')
// -----------------------------------
// To import our schemas we can use several different approaches the first is what I prefer its easier for me to understand but we will go over both here.
// ------------------------------------------------------
import { listItemSchema } from '../models/listItemModels.js'
const ListItem = mongoose.model('ListItem', listItemSchema)
// ------------------------------------------------------
// With this approach I import the actual schema from the models file and store it in a variable here
// ------------------------------------------------------
// const ListItem = require('../models/listItemModels')
// ------------------------------------------------------
// With this approach we are utilizing the export at the end of the model file and we import the model

// Below we will write our actual CRUD operations for export to the routes file

// The first operation we will write is to add a new item to our list this corresponds to the Create in CRUD
// Add export and store a function inside the variable we will use the async function because we will be waiting on information and we dont want the function to continue to run without all the data this is called a promise
export const addNewItem = async (req, res) =>{
// Create a variable here to store the new instance of your model using the request body by doing this you are using the JSON data in the request to fill in the values of the keys in your model.
    let newItem = new ListItem(req.body)
// Using try and catch we will handle the model instance that was just created
    try{
// Below define a variable to store the instance in once the promise has been fullfilled thats why we use the await syntax here when the instance has been created we are giving it the save() method at this point the newItem is a full JSON stored in the listItem variable.
        const listItem = await newItem.save()
// After the save has been completed we need to send the browser a response here we will send the browser the created JSON
        res.json(newItem)
    }
// Catch is for error handling if there is a problem creating or saving the instance the user and the browser need to be informed of the problem a 500 error means the problem is on our side in other words something didnt function correctly in the server a 404 error means there is a problem on the user side such as an incorrect url it is imperative to utilize error handling in all CRUD operations to ensure expeditency in fixing problems and debugging code.
    catch(err){
        res.send(err)
    }
}

export const getItems = async (req, res)=>{
    try{
        const items = await ListItem.find({})
        res.json(items)
    }
    catch(err){
        res.send(err)
}
}

export const deleteItem = async (req, res) =>{    
    try{
        const item = await ListItem.deleteOne({ itemDescription: req.params.itemDescription })
        res.json({ message: 'Succesfully deleted item'})  
    } catch (err){
        res.send(err)
    }
}