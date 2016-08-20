import React, { Component } from 'react';
import { Link } from 'react-router';
import 'babel-polyfill';
import classNames from 'classnames';
import fetch from 'isomorphic-fetch';

import '../styles/Header.css';

class Header extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  static propTypes = {
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return <h1>Hello World...!</h1>;
  }
}

export default Header;
