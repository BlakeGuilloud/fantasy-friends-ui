import React, { Component } from 'react';
import { Header, Navigation } from './components';

export default class App extends Component {
  render() {
    return (
      <div className="app-layout">
      <Header />
        <div className="app-layout__main">
          <Navigation />
          {this.props.children}
        </div>
      </div>
    );
  }
}
