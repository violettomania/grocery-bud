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
      <div className='items'>
        <div className='single-item'>
          <input type='checkbox' onChange={() => {}} />
          <p style={{ textTransform: 'capitalize' }}>stuff</p>
          <button className='btn remove-btn' type='button'>
            delete
          </button>
        </div>
        <div className='single-item'>
          <input type='checkbox' onChange={() => {}} />
          <p
            style={{
              textTransform: 'capitalize',
              textDecoration: 'line-through',
            }}
          >
            new stuff
          </p>
          <button className='btn remove-btn' type='button'>
            delete
          </button>
        </div>
      </div>
    </section>
  );
}
