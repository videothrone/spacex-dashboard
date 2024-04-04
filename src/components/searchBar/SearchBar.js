import './searchbar.scss';

export default function SearchBar ({searchItems, searchForm}) {
  return (
    <div className='searchbar-container'>
      <form ref={searchForm} className='searchbar'>
        <label htmlFor='search' className='visually-hidden'>Search launch by ID</label>
        <input
            type='search'
            title='Search launch by ID'
            id='search'
            name='search'
            placeholder='Get more info by ID...'
            autoComplete='off'
          />
        <button className='submit-button' onClick={searchItems} type='submit'>Search</button>
      </form>
    </div>
  )
}
