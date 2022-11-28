import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import styles from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <img className={ styles.mainTitle } src={ logo } alt="Sistema Solar" />
        </div>
      </header>
    );
  }
}

export default Header;
