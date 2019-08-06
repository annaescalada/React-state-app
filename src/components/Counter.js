import React, { Component } from 'react';
import Number from './Number.js';
import List from './List.js';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      title: 'This is a counter',
      isNumberShowing: true,
      data: [
        {name: 'Barcelona', population: '1,5 millones'},
        {name: 'Madrid', population: '3,4 millones'},
        {name: 'Moscow', population: '12 millones'},
        {name: 'Moscow', population: '12 millones'},
        {name: 'Dallas', population: '6 millones'},
      ]
    };
  }

  operate = (operator) => {
      let newNumber = this.state.number;
      this.setState({
      number: newNumber + operator
    }, () => {console.log(this.state);})
  }

  showTextBasedOnNumber = () =>{
    const {number} = this.state;
    if (number > 0) {
      return <p>This number is higher than 0</p>
    } else if (number < 0) {
      return <p>This number is lower than 0</p>
    } else {
      return <p>This number equals to 0</p>
    }
  }

  render() {
    const {title, number, isNumberShowing, data} = this.state;
    return (
      <div>
        <h1>{title}</h1>
        {isNumberShowing ? <Number number={number}/> : null}
        <button onClick={() => {this.operate(1)}}>Sum</button>
        <button onClick={() => {this.operate(-1)}}>Subtrack</button>
        {this.showTextBasedOnNumber()}
        <List cities={data}/>
      </div>
    )
  }
}

export default Counter;