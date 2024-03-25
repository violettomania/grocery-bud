import React from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@/components/ErrorFallback';

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
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className='single-item'>
        <input type='checkbox' onChange={handleChange} id={id.toString()} />
        <p style={{ textTransform: 'capitalize', textDecoration }}>
          {children}
        </p>
        <button
          className='btn remove-btn'
          type='button'
          onClick={() => handleDelete(id)}
        >
          delete
        </button>
      </div>
    </ErrorBoundary>
  );
}
