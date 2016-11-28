import React, { Component } from 'react';

export default class Countdown extends Component {
  static propTypes = {}

  countdown = () => {
    const end = new Date('4/27/2017');
    const now = new Date();
    const difference = Math.ceil((end - now) / (1000 * 3600 * 24));

    return difference;
  }

  render() {
    const {} = this.props;

    return (
      <li className="app-navigation__list-item">
        <div>
          {this.countdown()} Days til draft day!
        </div>
      </li>
    );
  }
}
