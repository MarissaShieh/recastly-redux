import React from 'react';
// import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';
import handleVideoSearch from '../actions/search.js';
// var SearchContainer = (state) => {
//     return (
//         <div className="search-bar form-inline">
//           <input
//             className="form-control"
//             type="text"
//             value={state.value}
//             onChange={state.handleSearchChange}
//           />
//           <button className="btn hidden-sm-down">
//             <span className="glyphicon glyphicon-search"></span>
//           </button>
//         </div>
//       );
// };

class Search extends React.Component {
  
    handleInputChange(e) {
      this.props.handleSearchInputChange(e.target.value);
      this.setState({
        value: e.target.value
      });
    }
  
    render() {
      return (
        <div className="search-bar form-inline">
          <input
            className="form-control"
            type="text"
            value={this.state.value}
            onChange={this.handleInputChange.bind(this)}
          />
          <button className="btn hidden-sm-down">
            <span className="glyphicon glyphicon-search"></span>
          </button>
        </div>
      );
    }
  };

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (value) => dispatch(handleVideoSearch(value))
    }
}


//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
