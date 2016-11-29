import React, { Component } from 'react';
import { Input, Button } from './patterns';

export default class Contact extends Component {
  state = {
    email: '',
    firstName: '',
    lastName: '',
  };

  handleChange = (name, value) => {
    const newState = {};

    newState[name] = value;

    this.setState(newState);
  }

  handleSubmit = () => {

    console.log('The state to submit: ', this.state);
  }

  render() {
    return (
      <div>
        <form>
          <Input name="firstName" onChange={this.handleChange} label="First Name" />
          <Input name="lastName" onChange={this.handleChange} label="Last Name" />
          <Input name="email" onChange={this.handleChange} label="Email Address" placeholder="example@gmail.com" />
          <Button type="warning" onClick={this.handleSubmit}>Submit</Button>
        </form>
      </div>
    );
  }
}
