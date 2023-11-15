import React from 'react';

interface ItemProps {
  children: string;
  onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Item({ children, onDelete: handleDelete }: ItemProps) {
  const [textDecoration, setTextDecoration] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextDecoration(e.target.checked ? 'line-through' : '');
  };

  return (
    <div className='single-item'>
      <input type='checkbox' onChange={handleChange} />
      <p style={{ textTransform: 'capitalize', textDecoration }}>{children}</p>
      <button className='btn remove-btn' type='button' onClick={handleDelete}>
        delete
      </button>
    </div>
  );
}
