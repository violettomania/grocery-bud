import React from 'react';
import Items from './Items';

export default function App() {
  const [item, setItem] = React.useState('');
  const [items, setItems] = React.useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setItems([...items, item]);
    setItem('');
  };

  return (
    <section className='section-center'>
      <div className='Toastify'></div>
      <form onSubmit={handleSubmit}>
        <h4>grocery bud</h4>
        <div className='form-control'>
          <input
            type='text'
            className='form-input'
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button type='submit' className='btn'>
            add item
          </button>
        </div>
      </form>
      <Items items={items} />
    </section>
  );
}
