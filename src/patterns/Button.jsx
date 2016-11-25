import React, { Component } from 'react';
import cx from 'classnames';

export default class Button extends Component {
  static propTypes = {
    children: React.PropTypes.node,
    onClick: React.PropTypes.func,
    type: React.PropTypes.oneOf(['default', 'primary', 'success', 'danger', 'warning']),
  }

  _handleClick = () => {
    if (this.props.onClick && typeof this.props.onClick === 'function') this.props.onClick();
  }

  render() {
    const { className, type } = this.props;

    const classes = cx('btn', className, {
      'btn-default': type === 'default',
      'btn-success': type === 'success',
      'btn-primary': type === 'primary',
      'btn-warning': type === 'warning',
      'btn-danger': type === 'danger',
    });

    return (
      <button className={classes} onClick={this._handleClick}>{this.props.children}</button>
    );
  }
}
