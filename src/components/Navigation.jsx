import React, { Component } from 'react';
import { Countdown, NavListItem } from './patterns';

export default class Navigation extends Component {
  render() {
    return (
      <ul className="app-navigation">
        <NavListItem name="Home" icon="home" link="/" />
        <NavListItem name="Articles" icon="trophy" link="/articles" />
        <NavListItem name="Rankings" icon="car" link="/rankings" />
        <NavListItem name="Contact" icon="envelope-o" link="/contact" />
        <Countdown />
      </ul>
    );
  }
}
