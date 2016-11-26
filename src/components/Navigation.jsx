import React, { Component } from 'react';

export default class Navigation extends Component {
  render() {
    return (
      <ul className="app-navigation">
        <li className="app-navigation__list-item">Home</li>
        <li className="app-navigation__list-item">About</li>
        <li className="app-navigation__list-item">Articles</li>
      </ul>
    );
  }
}
