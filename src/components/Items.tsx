import Item from './Item';

export default function Items() {
  return (
    <div className='items'>
      <Item
        handleChange={() => {}}
        textDecoration=''
        text='stuff'
        onDelete={() => {}}
      />
      <Item
        handleChange={() => {}}
        textDecoration='line-through'
        text='more stuff'
        onDelete={() => {}}
      />
    </div>
  );
}
