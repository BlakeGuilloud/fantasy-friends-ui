import React, { Component } from 'react';
import { Button } from './patterns';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Button type="secondary" onClick={() => console.log('hello world')}>Hello secondary</Button>
        <Button type="primary" onClick={() => console.log('hello world')}>Hello world</Button>
        <Button type="warning" onClick={() => console.log('hello world')}>Hello world</Button>
        <Button type="danger" onClick={() => console.log('hello world')}>Hello world</Button>
        <Button type="default" onClick={() => console.log('hello world')}>Hello world</Button>
      </div>
    );
  }
}
