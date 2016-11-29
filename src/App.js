import React, { Component } from 'react';
import { Footer, Header, Navigation } from './components';

export default class App extends Component {
  render() {
    return (
      <div className="app-layout">
        <div className="app-layout__main">
          <div className="app-layout__content">
            <Header />
            <Navigation />
            <div className="app-layout__children">
              {this.props.children}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
