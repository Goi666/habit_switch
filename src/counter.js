import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
  constructor(){
    super();
    this.state = {
      count: 0
    };
  }

  onClick(){
    this.setState({
      count: this.state.count + 1
    });
  }

  render(){
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.onClick.bind(this)} className="button">No Fapp</button>
      </div>
    )
  }
}

export default Counter;