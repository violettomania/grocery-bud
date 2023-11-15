import Items from './Items';

export default function App() {
  return (
    <section className='section-center'>
      <div className='Toastify'></div>
      <form>
        <h4>grocery bud</h4>
        <div className='form-control'>
          <input
            type='text '
            className='form-input'
            value=''
            onChange={() => {}}
          />
          <button type='submit' className='btn'>
            add item
          </button>
        </div>
      </form>
      <Items />
    </section>
  );
}
