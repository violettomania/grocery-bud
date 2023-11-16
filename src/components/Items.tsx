import Item from './Item';

interface ItemsProps {
  items: SingleItem[];
  onDelete: (id: string) => void;
}

export default function Items({ items, onDelete: handleDelete }: ItemsProps) {
  return (
    <div className='items'>
      {items.map((item) => (
        <Item key={item.id} onDelete={handleDelete} id={item.id}>
          {item.text}
        </Item>
      ))}
    </div>
  );
}
