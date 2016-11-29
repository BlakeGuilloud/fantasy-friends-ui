import React, { Component } from 'react';
import { Input, Button, TextArea } from './patterns';

export default class Contact extends Component {
  state = {
    email: '',
    firstName: '',
    lastName: '',
    question: '',
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
          <Input initialValue={this.state.firstName} name="firstName" onChange={this.handleChange} label="First Name" />
          <Input initialValue={this.state.lastName} name="lastName" onChange={this.handleChange} label="Last Name" />
          <Input initialValue={this.state.email} name="email" onChange={this.handleChange} label="Email Address" placeholder="example@gmail.com" />
          <TextArea initialValue={this.state.question} name="question" rows={5} label="Question" onChange={this.handleChange} />
          <Button type="warning" onClick={this.handleSubmit}>Submit</Button>
        </form>
      </div>
    );
  }
}
