import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Item from './Item';

interface SingleItem {
  text: string;
  id: string;
}

export default function App() {
  const [currentItem, setCurrentItem] = React.useState({ id: '', text: '' });
  const [items, setItems] = React.useState<SingleItem[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentItem.text.trim() !== '') {
      setItems([...items, { id: uuidv4(), text: currentItem.text }]);
      setCurrentItem({ id: '', text: '' });
    }
  };

  const handleDelete = (id: string) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <section className='section-center'>
      <form onSubmit={handleSubmit}>
        <h4>ye olde to-do list</h4>
        <div className='form-control'>
          <input
            type='text'
            className='form-input'
            value={currentItem.text}
            onChange={(e) => setCurrentItem({ id: '', text: e.target.value })}
          />
          <button type='submit' className='btn'>
            add item
          </button>
        </div>
      </form>
      <div className='items'>
        {items.map((item) => (
          <Item key={item.id} onDelete={handleDelete} id={item.id}>
            {item.text}
          </Item>
        ))}
      </div>
    </section>
  );
}
