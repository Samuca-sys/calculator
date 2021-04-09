import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  handleOnClick = () => {
    console.log('click');
  }

  render () {
    return (
      <button 
        onClick={this.handleOnClick}
      >
        {this.props.name}
      </button>
    )
  }
}

Button.propTypes = {
  name: PropTypes.string //assign strint to props called name
};