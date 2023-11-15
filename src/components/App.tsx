import React from 'react';
import Items from './Items';

export default function App() {
  const [item, setItem] = React.useState({ id: 0, text: '' });
  const [items, setItems] = React.useState<SingleItem[]>([]);
  const [selectedIndexes, setSelectedIndexes] = React.useState<number[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setItems([...items, item]);
    setItem(item);
  };

  const handleSelectionChange = (id: number) => {
    setSelectedIndexes([...selectedIndexes, id]);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const newItems =
      selectedIndexes.length > 0
        ? items.filter((item) => selectedIndexes.includes(item.id))
        : items.filter((item) => item.id !== Number(e.currentTarget.id));
    const reorderedItems = newItems.map((item, index) => ({
      ...item,
      id: index + 1,
    }));
    setItems(reorderedItems);
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
      <Items
        items={items}
        onDelete={handleDelete}
        onSelectionChange={handleSelectionChange}
      />
    </section>
  );
}
