import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './searchbar.scss';

export default function SearchBar ({searchItems, searchForm, setErrorMsg, setData, className}) {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (event) => {
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
    }

    searchItems(event);
    setSearchValue(searchedID);
  };

  const handleCancelButtonClick = (event) => {
    event.preventDefault();
    searchForm.current.querySelector('input').focus();
    setSearchValue('');
    setErrorMsg(false);
    setData({});
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={`searchbar-container ${className}`}>
      <form ref={searchForm} className='searchbar' onSubmit={handleSubmit}>
        <label htmlFor='search' className='visually-hidden'>Search launch by ID</label>
        <div className='searchbar__input-container'>
          <input
              className='searchbar__input'
              type='search'
              title='Search launch by ID'
              id='search'
              name='search'
              placeholder='Get more info by ID...'
              autoComplete='off'
              required="required"
              value={searchValue}
              onChange={handleInputChange}
            />
          {searchValue && (
            <button className='button searchbar__cancel-button' aria-label='x' type='button' onClick={handleCancelButtonClick}>
              <FontAwesomeIcon icon={faXmark} className='searchbar__cancel-button-icon' />
            </button>
          )}
        </div>
        <button className='button searchbar__submit-button' type='submit'>Search</button>
      </form>
    </div>
  )
}
