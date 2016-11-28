import React, { Component } from 'react';
import { Link } from 'react-router';
import cx from 'classnames';

export default class NavListItem extends Component {
  static propTypes = {
    name: React.PropTypes.string,
    icon: React.PropTypes.string,
    link: React.PropTypes.string,
  }

  _handleClick = () => {
    if (this.props.onClick && typeof this.props.onClick === 'function') this.props.onClick();
  }

  render() {
    const { className, name, link, icon } = this.props;

    const classes = cx('app-navigation__list-item', className, {});

    return (
      <li className={classes}>
        <Link className="app-navigation__list-item__link" to={link}>
          {icon ? <i className={`fa fa-${icon}`}></i> : null}
          {name}
        </Link>
      </li>
    );
  }
}
