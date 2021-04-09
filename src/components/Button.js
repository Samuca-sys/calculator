import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  render () {
    return (
      <button>{this.props.name}</button>
    )
  }
}

Button.propTypes = {
  name: PropTypes.string //assign strint to props called name
};