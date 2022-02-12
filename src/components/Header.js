import React from 'react';
import moonIcon from "../assets/moon-icon.svg";
import sunIcon from "../assets/sun-icon.svg";

const Header = () => {
  return (
    <div className='Header'>
      <header className='Header__header'>
        <h1 className='Header__title'>Where in the world?</h1>
        <div className='Header__theme'>
          <button className='Header__theme__btn'><img className='Header__theme__btn__img' src={moonIcon} alt="Switch theme"></img></button>
          <span className='Header__theme__span'>Dark Mode</span>
        </div>
      </header>
    </div>
  );
}

export default Header;