import React, { Component } from 'react';

export default class ContentPreview extends Component {
  static propTypes = {
    body: React.PropTypes.string,
    title: React.PropTypes.string,
    timestamp: React.PropTypes.string,
  }

  _handleClick = () => {
    if (this.props.onClick && typeof this.props.onClick === 'function') this.props.onClick();
  }

  render() {
    const { body, title, timestamp } = this.props;
    const preview = body.split(' ', 30).join(' ');
    console.log('newbody', preview);

    return (
      <div className="app-content__preview">
        <h3 className="app-content__preview__title">{title}</h3>
        <div className="app-content__preview__body">
          {preview}...
        </div>
        <div className="app-content__preview__footer">
          {timestamp}
        </div>
      </div>
    );
  }
}
