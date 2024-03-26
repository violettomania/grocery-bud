import React from 'react';

interface ItemProps {
  children: string;
  onDelete: (id: string) => void;
  id: string;
}

export default function Item({
  children,
  onDelete: handleDelete,
  id,
}: ItemProps) {
  const [textDecoration, setTextDecoration] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextDecoration(e.target.checked ? 'line-through' : '');
  };

  return (
    <div className='single-item'>
      <input type='checkbox' onChange={handleChange} id={id.toString()} />
      <p style={{ textTransform: 'capitalize', textDecoration }}>{children}</p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => handleDelete(id)}
      >
        delete
      </button>
    </div>
  );
}
