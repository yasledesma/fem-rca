import React, {useContext} from 'react';
import AppContext from './AppContext';

const Country = () => {
  const { info } = useContext(AppContext);

  return (
    <div className='Country'>
      <img className='Country__flag' src="" alt="Flag of Germany"></img>
      <div className='Country__info'>
        <h2 className='Country__info__name'>-</h2>
        <div className='Country__info__data'><span>Population: </span></div>
        <div className='Country__info__data'><span>Region: </span></div>
        <div className='Country__info__data'><span>Capital: </span></div>
      </div>
    </div>
  );
}

export default Country;