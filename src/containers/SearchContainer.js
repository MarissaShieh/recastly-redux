import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

var mapDispatchToProps = (dispatch) => ({
  handleSearchInputChange: (q) => {
    dispatch(handleSearchChange(q));
  }
});

var SearchContainer = connect(null, mapDispatchToProps)(Search);

export default SearchContainer;