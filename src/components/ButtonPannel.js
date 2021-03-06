import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

import './ButtonPanel.css'

export default class ButtonPanel extends React.Component {
  handleOnClick = (buttonName) => {
    this.props.clickHandler(buttonName);
  }
  render () {
    return (
      <div className="component-button-panel">
        <div>
          <Button name="AC" clickHandler={this.handleOnClick}/>
          <Button name="+/-" clickHandler={this.handleOnClick}/>
          <Button name="%" clickHandler={this.handleOnClick}/>
          <Button name="÷" clickHandler={this.handleOnClick} orange/>
        </div>
        <div>
          <Button name="7" clickHandler={this.handleOnClick}/>
          <Button name="8" clickHandler={this.handleOnClick}/>
          <Button name="9" clickHandler={this.handleOnClick}/>
          <Button name="x" clickHandler={this.handleOnClick} orange/>
        </div>
        <div>
          <Button name="4" clickHandler={this.handleOnClick}/>
          <Button name="5" clickHandler={this.handleOnClick}/>
          <Button name="6" clickHandler={this.handleOnClick}/>
          <Button name="-" clickHandler={this.handleOnClick} orange/>
        </div>
        <div>
          <Button name="1" clickHandler={this.handleOnClick}/>
          <Button name="2" clickHandler={this.handleOnClick}/>
          <Button name="3" clickHandler={this.handleOnClick}/>
          <Button name="+" clickHandler={this.handleOnClick} orange/>
        </div>
        <div>
          <Button name="0" clickHandler={this.handleOnClick}/>
          <Button name="." clickHandler={this.handleOnClick}/>
          <Button name="MOD" clickHandler={this.handleOnClick} orange/>
          <Button name="=" clickHandler={this.handleOnClick} orange/>
        </div>
      </div>
    )
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func
}