import React from 'react';

interface ItemProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  textDecoration: string;
  text: string;
  onDelete: () => void;
}

export default function Item({
  handleChange,
  textDecoration,
  text,
  onDelete: handleDelete,
}: ItemProps) {
  return (
    <div className='single-item'>
      <input type='checkbox' onChange={handleChange} />
      <p style={{ textTransform: 'capitalize', textDecoration }}>{text}</p>
      <button className='btn remove-btn' type='button' onClick={handleDelete}>
        delete
      </button>
    </div>
  );
}
