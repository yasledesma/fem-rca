import React from 'react';
import dropdownIcon from '../assets/dropdown-icon.svg';
import FilterOptions from "./FilterOptions"

const Filter = () => {
  return (
    <div className='Filter'>
      <div className='Filter__wrapper'>
        <span className='Filter__wrapper__description'>Filter by Region</span>
        <button className='Filter__wrapper__btn' type='button'><img className='Filter__wrapper__btn__img' src={dropdownIcon} alt=''></img></button>
      </div>
      {/* <FilterOptions /> */}
    </div>
  );
}

export default Filter;