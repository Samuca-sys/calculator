import React from 'react';
import PropTypes from 'prop-types';

import './Button.css'

export default class Button extends React.Component {
  handleOnClick = () => {
    this.props.clickHandler(this.props.name);
  }

  render () {
    return (
      <button 
        className="component-button"
        onClick={this.handleOnClick}
      >
        {this.props.name}
      </button>
    )
  }
}

Button.propTypes = {
  name: PropTypes.string, //assign strint to props called name
  clickHandler: PropTypes.func
};