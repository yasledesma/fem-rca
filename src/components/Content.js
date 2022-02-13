import React from 'react'
import SearchBar from './SearchBar';
import Filter from './Filter'
import Country from './Country';

const Content = () => {
  return (
    <main className='Content'>
        <SearchBar />
        <Filter />
        <Country />
    </main>
  );
}

export default Content;