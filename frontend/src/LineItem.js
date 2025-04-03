const LineItem = ({ item, handleDelete, submittedItem }) =>{
    return(
        <li className='item'>
            <p>{`You want  ${item.numberRequested} ${item.itemDescription}`}</p>
            <button 
                className='buttonDelete'
                onClick={() => handleDelete(item.itemDescription)}
                role='button'
                tabIndex='0'
            >Delete
            </button>
        </li>
    )
}

export default LineItem