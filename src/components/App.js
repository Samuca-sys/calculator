import React from 'react';

import Display from "./Display";
import ButtonPanel from "./ButtonPannel";

export default class App extends React.Component {
  handleOnClick = (buttonName) => {
    console.log('click', buttonName);
  }

  render() {
    return (
      <div className="App">
        <Display  value="117"/>
        <ButtonPanel clickHandler={this.handleOnClick}/>
      </div>
    );
  }
}
