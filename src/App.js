// @flow
import React, { useState } from 'react';
import Searchbar from './Searchbar';
import Header from './Header';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { Grid } from '@giphy/react-components';
import './App.css';

const gf = new GiphyFetch('gpy1PK3qjvtwhFwTNAyW98Khtw3oB4sp');

const App = () => {
  const [query, setQuery] = useState('');
  const fetchGifs = (offset: number) => gf.search(query, { offset, limit: 20 });
  return (
    <div className="App">
      <Header />
      <Searchbar query={query} onSearch={setQuery} />
      <div>
        <Grid width={window.innerWidth} columns={3} gutter={6} key={query} fetchGifs={fetchGifs}/>
      </div>
    </div>
  );
}

export default App;
