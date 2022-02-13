import React from 'react'

const Country = () => {
  return (
    <div className='Country'>
      <img className='Country__flag' src="" alt="Flag of Germany"></img>
      <div className='Country__info'>
        <div className='Country__info__name'>Germany</div>
        <span className='Country__info__data'>Population: 80.000</span>
        <span className='Country__info__data'>Region: Europe</span>
        <span className='Country__info__data'>Capital: Berlin</span>
      </div>
    </div>
  );
}

export default Country;