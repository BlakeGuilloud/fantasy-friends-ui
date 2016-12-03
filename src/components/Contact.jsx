import React, { Component } from 'react';
import { Input, Button, TextArea } from 'react-form-control';

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
          <div className="row">
            <div className="col-6">
              <Input initialValue={this.state.firstName} name="firstName" onChange={this.handleChange} label="First Name" />
            </div>
            <div className="col-6">
              <Input initialValue={this.state.lastName} name="lastName" onChange={this.handleChange} label="Last Name" />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Input initialValue={this.state.email} name="email" onChange={this.handleChange} label="Email Address" placeholder="example@gmail.com" />
            </div>
            <div className="col-6">
              <Input initialValue={this.state.topic} name="topic" onChange={this.handleChange} label="Topic" placeholder="Running backs" />
            </div>
          </div>
          <TextArea initialValue={this.state.question} name="question" label="Question" onChange={this.handleChange} />
          <Button type="warning" onClick={this.handleSubmit}>Submit</Button>
        </form>
      </div>
    );
  }
}
