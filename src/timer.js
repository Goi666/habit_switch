import React, { Component } from 'react';
import './timer.css';

class Timer extends Component {
  // constructor () {
  //   super()
  //   this.state = {hours: '00', minnutes: '00', seconds: '00'}
  // }
  render() {
    const {
      hours,
      minnutes,
      seconds
    } = this.props;

    return (
      <div className="timerItem">
        <div className="timerItem-time">{hours+1}:{minnutes}:{seconds}</div>
      </div>
    );
  }
}

export default Timer;