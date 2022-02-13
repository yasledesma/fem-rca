import React from 'react'
import searchIcon from "../assets/search-icon.svg"

const SearchBar = () => {
  return (
    <div className='SearchBar'>
      <form action='GET' className='SearchBar__form'>
        <button className='SearchBar__form__btn' type='submit'><img className='SearchBar__form__btn__img' src={searchIcon} alt=''></img></button>
        <input className='SearchBar__form__input' type="text" placeholder='Search for a country...'></input>
    </form>
    </div>
  );
}

export default SearchBar;