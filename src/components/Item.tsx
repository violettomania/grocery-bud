import React from 'react';

interface ItemProps {
  children: string;
  onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onSelectionChange: (id: number) => void;
  id: number;
}

export default function Item({
  children,
  onDelete: handleDelete,
  onSelectionChange,
  id,
}: ItemProps) {
  const [textDecoration, setTextDecoration] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextDecoration(e.target.checked ? 'line-through' : '');
    onSelectionChange(Number(e.target.id));
  };

  return (
    <div className='single-item'>
      <input type='checkbox' onChange={handleChange} id={id.toString()} />
      <p style={{ textTransform: 'capitalize', textDecoration }}>{children}</p>
      <button className='btn remove-btn' type='button' onClick={handleDelete}>
        delete
      </button>
    </div>
  );
}
