// The routes file is very straigh forward in here we simply access information coming into the server we call this information the request and we give it a job to do

// First we will import the CRUD operations functions we created in the controller file
import { 
    addNewItem,
    deleteItem,
    getItems,
} from '../controllers/listControllers.js'
// We now have access to all the functions from the controllers file
//  
// We have to create a variable called routes to export to our server.js file using express routes method
const routes = (app) =>{
// Inside the function is where we give the request work to do the .route() method waits for a request from ant url defined inside of it
    app.route('/items')

// Once the route() method receives a request the different types of requests can be called upon to perform work in the case below the post method is executing the addNewItem function imported from the controllers this is where the request body is passed to the addNewItem function.
    .post(addNewItem)
    // .delete(deleteItem)
    .get(getItems)
// For the delete route we are going to delete the items from the data base using one of their properties in this case we are going to use the itemDescription property in order to do this we must add a little more to the route by using the : it allows use to use parameters for our request we could use any of the JSON keys to do this. 
    app.route('/items/:itemDescription')
    .delete(deleteItem);
}

export default routes
