import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// ...

class People extends Component {
  static propTypes = {
    people: PropTypes.array,
  };

  renderList = () => {
    return this.props.people.map(human => (
       <div className='App-box' key={human.id}>
        {human.name}
      </div>
    ))
  }
  
  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  people: state.people.people,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  // ...
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(People);
