import './searchbar.scss';

export default function SearchBar ({searchItems, searchForm, setErrorMsg, className}) {
  const handleSubmit = (event) => {
    // Prevent form submission by default
    event.preventDefault();

    const form = searchForm.current;
    const searchedID =`${`${form['search'].value}`}`;

    // Validate input for empty strings or whitespace
    if (searchedID === '' || /^\s+$/.test(searchedID)) {
      setErrorMsg(true);
      return;
    }

    // Validate input for alphanumeric characters
    const alphanumericRegex = /^[a-zA-Z0-9\s]*$/;

    if (!alphanumericRegex.test(searchedID)) {
      setErrorMsg(true);
      return;
    } else {
      searchItems(event);
    }

  };

  return (
    <div className={`searchbar-container ${className}`}>
      <form ref={searchForm} className='searchbar' onSubmit={handleSubmit}>
        <label htmlFor='search' className='visually-hidden'>Search launch by ID</label>
        <input
            type='search'
            title='Search launch by ID'
            id='search'
            name='search'
            placeholder='Get more info by ID...'
            autoComplete='off'
            required="required"
          />
        <button className='button searchbar__button' type='submit'>Search</button>
      </form>
    </div>
  )
}
