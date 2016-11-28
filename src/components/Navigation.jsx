import React, { Component } from 'react';
import { NavListItem } from './patterns';

export default class Navigation extends Component {
  render() {
    return (
      <ul className="app-navigation">
        <NavListItem name="Home" icon="home" link="/" />
        <NavListItem name="Articles" icon="home" link="/articles" />
        <NavListItem name="Contact" icon="envelope-o" link="/contact" />
      </ul>
    );
  }
}
