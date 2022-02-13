import React from 'react';
import moonIcon from "../assets/moon-icon.svg";
import sunIcon from "../assets/sun-icon.svg";

const Header = () => {
  return (
    <div className='Header'>
      <header className='Header__header'>
        <h1 className='Header__header__title'>Where in the world?</h1>
        <div className='Header__header__theme'>
          <button className='Header__header__theme__btn' type='button'><img className='Header__header__theme__btn__img' src={moonIcon} alt="Switch theme"></img></button>
          <span className='Header__header__theme__span'>Dark Mode</span>
        </div>
      </header>
    </div>
  );
}

export default Header;