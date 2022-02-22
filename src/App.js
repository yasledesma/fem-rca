import React, {useContext} from 'react';
import './styles/App.scss';
import Header from "./components/Header";
import Content from "./components/Content";
import AppContext from "./components/AppContext";
import axios from 'axios';

const App = () => {
  return (
    <AppContext.Provider>
      <div className="App">
        <Header />
        <Content />
      </div>
    </AppContext.Provider>
  );
}

export default App;