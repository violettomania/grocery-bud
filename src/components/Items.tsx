import Item from './Item';

interface ItemsProps {
  items: SingleItem[];
  onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Items({ items, onDelete: handleDelete }: ItemsProps) {
  return (
    <div className='items'>
      {items.map((item, index) => (
        <Item key={`${item}-${index}`} onDelete={handleDelete}>
          {item.text}
        </Item>
      ))}
    </div>
  );
}
