// @flow
import React from 'react';
import { connect } from 'react-redux';
import Searchbar from './Searchbar';
import Header from './Header';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { Grid } from '@giphy/react-components';
import './App.css';

const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY || '');

type Props = {
  query: string
};

const App = ({ query }: Props) => {
  const fetchGifs = (offset: number) => gf.search(query, { offset, limit: 20 });
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <div>
        <Grid width={window.innerWidth} columns={3} gutter={6} key={query} fetchGifs={fetchGifs}/>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  query: state.search
});

export default connect(mapStateToProps)(App);
