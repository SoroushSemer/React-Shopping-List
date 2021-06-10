import { useState } from 'react'
import Header from './components/Header'
import Items from './components/Items'
import AddItem from './components/AddItem'

function App() {
  const [showAddItem, setShowAddItem] = useState(false)
  const [items, setItems] = useState([
    {
      id: 1,
      text: "Milk",
      quantity: 3,
      checked: true,
    },
    {
      id: 2,
      text: "Eggs",
      quantity: 2,
      checked: true,
    },
    {
      id: 3,
      text: "Toast",
      quantity: 5,
      checked: true,
    },
  ])
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }
  const toggleChecked = (id) => {
    setItems(items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item))
  }
  const addItem = (item) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newItem = { id, ...item }
    setItems([...items, newItem])
  }
  return (
    <div className="container">
      <Header title="Shopping List" onAdd={() => setShowAddItem(!showAddItem)} showAddItem={showAddItem} showAdd={showAddItem} />
      {showAddItem ? <AddItem onAdd={addItem} /> : ''}
      <newItem/>
      {items.length > 0 ? <Items items={items} onDelete={deleteItem} onChecked={toggleChecked} /> : <h3 style={{ color: 'red' }}>No Items</h3>}
    </div>
  );
}

export default App;
