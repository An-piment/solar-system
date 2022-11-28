import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.css';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className={ styles.planetTitle }>{headline}</h2>
    );
  }
}

export default Title;

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};
