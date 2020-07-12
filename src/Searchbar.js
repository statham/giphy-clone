// @flow
import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: '10px',
    flex: 1,
  },
  button: {
    borderRadius: 0,
    marginLeft: '10px',
    height: '100%',
    background: 'linear-gradient(45deg, rgb(153, 51, 255) 0%, rgb(255, 102, 102) 100%)',
    color: 'white',
  }
}))

type Props = {
  query: string,
  onSearch: (query: string) => void,
};

const Searchbar = ({ query, onSearch }: Props) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const handleChange = (event: Object) => setText(event.target.value);
  const handleSearch = () => onSearch(text);
  return (
    <Paper component="form" square className={classes.paper}>
      <InputBase id="main-search" placeholder="Search GIFs" className={classes.input} value={text} onChange={handleChange} />
      <IconButton aria-label="search" className={classes.button} onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default Searchbar;