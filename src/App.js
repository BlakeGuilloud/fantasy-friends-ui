import React, { Component } from 'react';
import { Header, Navigation } from './components';

export default class App extends Component {
  render() {
    return (
      <div className="app-layout">
        <Navigation />
        <div className="app-layout__main">
          <Header />
          <div className="app-layout__children">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
