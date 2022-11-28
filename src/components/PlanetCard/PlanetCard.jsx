import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlanetCard.module.css';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className={ styles.planetBox } data-testid="planet-card">
        <img
          className={ styles[planetName] }
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
        <h3 className={ styles.planetName } data-testid="planet-name">{planetName}</h3>
      </div>
    );
  }
}

export default PlanetCard;

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
