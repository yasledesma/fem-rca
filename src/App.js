import React, {useEffect, useState} from 'react';
import './styles/App.scss';
import Header from "./components/Header";
import Content from "./components/Content";
import AppContext from "./components/AppContext";
import axios from 'axios';

const App = () => {
  const [info, setInfo] = useState([]);
  console.log("This is info");
  console.log(info);

  const fetchData = () => {
    axios.get("https://restcountries.com/v3.1/all")
      .then( response => {
        const country = response.data[217];
  
        const obj = {
          name: country.name.common,
          flag: country.flags.svg,
          population: country.population,
          region: country.region,
          capital: country.capital,
        };
  
        setInfo(() => [obj]);
      })
  }

  useEffect(() => fetchData(), []);

  return (
    <AppContext.Provider value={{info}}>
      <div className="App">
        <Header />
        <Content />
      </div>
    </AppContext.Provider>
  );
}

export default App;