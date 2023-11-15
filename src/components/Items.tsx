import Item from './Item';

interface ItemsProps {
  items: string[];
}

export default function Items({ items }: ItemsProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  return (
    <div className='items'>
      {items.map((item, index) => (
        <Item key={`${item}-${index}`} onDelete={handleDelete}>
          {item}
        </Item>
      ))}
    </div>
  );
}
