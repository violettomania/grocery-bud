import Item from './Item';

interface ItemsProps {
  items: SingleItem[];
  onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onSelectionChange: (id: number) => void;
}

export default function Items({
  items,
  onDelete: handleDelete,
  onSelectionChange,
}: ItemsProps) {
  return (
    <div className='items'>
      {items.map((item, index) => (
        <Item
          key={`${item}-${index}`}
          onDelete={handleDelete}
          onSelectionChange={onSelectionChange}
          id={item.id}
        >
          {item.text}
        </Item>
      ))}
    </div>
  );
}
