import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {filterValue} from '../actions/people'

class Filter extends Component {
  static propTypes = {
    filterValue: PropTypes.func,
  };

  inputValue = (event) => {
    this.props.filterValue(event.target.value);
  }

  render() {
    return (
      <div className='App-box'>
        <input onChange={this.inputValue} placeholder='Search'></input>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  filterValue
}, dispatch);

export default connect(mapDispatchToProps)(Filter);
