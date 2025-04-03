const AddItem = ({ newItem, setNewItem, numRequested, setNumRequested, handleSubmit }) =>{
   
    return(
        <form className="inputForm"
            onSubmit={handleSubmit}
        >            
            <label htmlFor="inputbox">What do you want?</label>
            <input
                autoFocus 
                id="inputbox1"
                type="text"
                placeholder="Enter Item"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}                
            />
            <label htmlFor="inputbox">How many?</label>
            <input
                autoFocus 
                id="inputbox2"
                type="text"
                placeholder="Enter amount requested  "
                value={numRequested}
                onChange={(e) => setNumRequested(e.target.value)}                
            />
            <button className='buttonAdd' type='submit'>Add</button>
        </form>
    )
}

export default AddItem
