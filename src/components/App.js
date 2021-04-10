import React from 'react';

import Display from "./Display";
import ButtonPanel from "./ButtonPannel";

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
    console.log('click', buttonName);
  }

  render() {
    return (
      <div className="App">
        <Display  
          value={this.state.next || this.state.total|| '0'}
        />
        <ButtonPanel clickHandler={this.handleOnClick}/>
      </div>
    );
  }
}
