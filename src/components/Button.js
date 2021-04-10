import React from 'react';
import PropTypes from 'prop-types';

import './Button.css'

export default class Button extends React.Component {
  handleOnClick = () => {
    this.props.clickHandler(this.props.name);
  }

  render () {
    const className = [
      "component-button",
      this.props.orange ? "orange" : "",
    ]

    return (
      <div className={className.join(" ").trim()}>
        <button 
          onClick={this.handleOnClick}
        >
          {this.props.name}
        </button>
      </div>
    )
  }
}

Button.propTypes = {
  name: PropTypes.string, //assign strint to props called name
  orange: PropTypes.bool,
  clickHandler: PropTypes.func
};