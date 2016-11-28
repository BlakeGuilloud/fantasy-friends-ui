import React, { Component } from 'react';
import { ContentPreview } from './patterns';

export default class Home extends Component {
  render() {
    return (
      <div className="app-content">
        <ContentPreview title="A very exciting article about things and stuff" body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolores numquam facere commodi totam se!" timestamp="12 / 12 / 2016" />
        <ContentPreview title="A very exciting article about things and stuff" body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolores numquam facere commodi totam se!" timestamp="12 / 12 / 2016" />
        <ContentPreview title="A very exciting article about things and stuff" body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolores numquam facere commodi totam se!" timestamp="12 / 12 / 2016" />
        <ContentPreview title="A very exciting article about things and stuff" body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolores numquam facere commodi totam se!" timestamp="12 / 12 / 2016" />
      </div>
    );
  }
}
