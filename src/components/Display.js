import React from 'react';
import PropTypes from 'prop-types'

export default class Display extends React.Component {
  render () {
    return (
      <div>
        <div>{this.props.value}</div>
      </div>
    )
  }
}

Display.propTypes = {
  value: PropTypes.string
};