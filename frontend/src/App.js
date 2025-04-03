import Content from './Content.js';
import { useState, useEffect } from 'react';
import AddItem from './AddItem.js';
import Header from './Header.js';
import Footer from './Footer.js';
function App() {
  const API_URL = 'http://localhost:1219/items';

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [numRequested, setNumRequested] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
      } catch (err) {
        console.log(err.stack);
      }
    };
    (async () => await fetchItems())();
  }, []);

  useEffect(() => {
    console.log('Items array:', items);
  }, [items]);

  const addItem = async (itemDescription, numberRequested) => {
    const newItemData = {
      itemDescription,
      numberRequested,
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItemData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const addedItem = await response.json();
      setItems((prevItems) => [...prevItems, addedItem]);
    } catch (err) {
      console.log('Failed to add item:', err);
    }
  };
  const handleDelete = async (description) => {
    try {
      const response = await fetch(`${API_URL}/${description}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const updatedItems = items.filter((item) => item.itemDescription !== description);
      setItems(updatedItems);
    } catch (err) {
      console.log('Failed to delete item:', err);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addItem(newItem, numRequested);
    setNewItem('');
    setNumRequested('');
  };
  return (
    <div className="app">
      <Header title="Commissary Order app" />
      <Content
        items={items}
        handleDelete={handleDelete}
      />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        numRequested={numRequested}
        setNumRequested={setNumRequested}
        handleSubmit={handleSubmit}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App
