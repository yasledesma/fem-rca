import React from 'react';

const Country = () => {
  return (
    <div className='Country'>
      <img className='Country__flag' src="" alt="Flag of Germany"></img>
      <div className='Country__info'>
        <h2 className='Country__info__name'>Germany</h2>
        <div className='Country__info__data'><span>Population:</span> 80.000</div>
        <div className='Country__info__data'><span>Region:</span> Europe</div>
        <div className='Country__info__data'><span>Capital:</span> Berlin</div>
      </div>
    </div>
  );
}

export default Country;