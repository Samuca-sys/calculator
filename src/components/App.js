import React from 'react';

import Display from "./Display";
import ButtonPanel from "./ButtonPannel";

import calculate from "../logic/calculate";

import './App.css'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null
    }
  }

  handleOnClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  }

  render() {
    return (
      <div className="component-app">
        <Display  
          value={this.state.next || this.state.total|| '0'}
        />
        <ButtonPanel clickHandler={this.handleOnClick}/>
      </div>
    );
  }
}
