import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './MissionCard.module.css';
import date from '../../images/date.svg';
import location from '../../images/location.svg';
import detinationPlanet from '../../images/destination.svg';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className={ styles.missionCard } data-testid="mission-card">
        <p className={ styles.missionName }data-testid="mission-name">{name}</p>
        <hr className={ styles.divideLine }/>
        <div className={ styles.infoBox }>
          <p 
            className={ styles.missionDescription } 
            data-testid="mission-year"
            >
            <img className={ styles.imageInfo } src={ date } alt="Date" />  {year}
          </p>
          <p 
            className={ styles.missionLocation } 
            data-testid="mission-country"
          >
            <img className={ styles.imageInfo } src={ location } alt="Location" />{country}
          </p>
          <p 
            className={ styles.missionDescription } 
            data-testid="mission-destination"
          >
            <img className={ styles.imageInfo } src={ detinationPlanet } alt="Location" /> {destination}
          </p>
        </div>
      </div>
    );
  }
}

export default MissionCard;

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
