import React from 'react';
import Items from './Items';

export default function App() {
  const [item, setItem] = React.useState({ id: 0, text: '' });
  const [items, setItems] = React.useState<SingleItem[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setItems([...items, item]);
    setItem(item);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('handleDelete');
    e.stopPropagation();
    const newItems = items.filter((item) => item.id !== +e.currentTarget.id);
    setItems(newItems);
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
            value={item.text}
            onChange={(e) =>
              setItem({ id: items.length + 1, text: e.target.value })
            }
          />
          <button type='submit' className='btn'>
            add item
          </button>
        </div>
      </form>
      <Items items={items} onDelete={handleDelete} />
    </section>
  );
}
