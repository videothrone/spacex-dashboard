import React, { useState } from 'react';
import './filter.scss';

export default function Filter({ className, handleFilterChange }) {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedFilter(selectedValue);
    handleFilterChange(selectedValue.toLowerCase());
  };

  return (
    <fieldset className={`filter ${className}`}>
      <legend className='filter__legend'>Filter by:</legend>
      <div className='filter__options'>
        <input type="radio" name="filter" id="allRadio" value="" checked={selectedFilter === ''} onChange={handleRadioChange} />
        <label htmlFor="allRadio">All</label>
        <input type="radio" name="filter" id="successRadio" value="success" checked={selectedFilter === 'success'} onChange={handleRadioChange} />
        <label htmlFor="successRadio">Success</label>
        <input type="radio" name="filter" id="failureRadio" value="failure" checked={selectedFilter === 'failure'} onChange={handleRadioChange} />
        <label htmlFor="failureRadio">Failure</label>
      </div>
    </fieldset>
  );
}
