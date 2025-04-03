import ItemList from "./itemList"
const Content = ({ items,  handleDelete }) => {
    
    return(
        <main>
            {items.length ? (
                <ItemList 
                items={items}
                handleDelete={handleDelete}
                
            />) : (<p>Your list is empty</p>)
        }
           
        </main>
    )
}

export default Content